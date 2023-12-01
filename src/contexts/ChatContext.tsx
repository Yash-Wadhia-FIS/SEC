import React, { createContext, FC, useContext, useState } from 'react';
import { sendMessage } from '../../pages/api/_request';

type MessageType = {
  type: string;
  post: string;
};

type ChatContextType = {
  posts: MessageType[];
  setPosts: React.Dispatch<React.SetStateAction<MessageType[]>>;
  fetchChat: () => Promise<void>;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};

interface ChatProviderProps {
  children: React.ReactNode; // Change the type of children to React.ReactNode
}


export const ChatProvider: FC<ChatProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<MessageType[]>([]);

  const fetchChat = async () => {
    try {
      // For example, assuming you have chatId and prompt values to send
      const chatId = '2rx24';
      const prompt = 'Hello';
      const isAuthenticated = true; // Replace this with your authentication logic

      const response = await sendMessage(chatId, prompt, isAuthenticated);
      console.log("chatContext",response);

      if (response && response.responseText) {
        setPosts((prevState) => [
          ...prevState,
          {
            type: 'bot',
            post: response.responseText,
          },
        ]);
      } else {
        setPosts((prevState) => [
          ...prevState,
          {
            type: 'bot',
            post: "Sorry, I don't have a response.",
          },
        ]);
      }
    } catch (error) {
      setPosts((prevState) => [
        ...prevState,
        {
          type: 'bot',
          post: 'Sorry, I encountered an error.',
        },
      ]);
    }
  };

  const contextValue: ChatContextType = {
    posts,
    setPosts,
    fetchChat,
  };

  return <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>;
};
