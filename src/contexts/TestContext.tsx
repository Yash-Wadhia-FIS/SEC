// import React,{createContext,FC, useContext, useState} from "react"
// import { sendMessage} from "../../pages/api/_request"


// type MessageType = {
//     chatId : string,
//     post : string
// }

// type ChatContextType = {
//     posts : MessageType,
//     setPosts : React.Dispatch<React.SetStateAction<MessageType[]>>;
//     fetchData : () => Promise<void>
// }

// const ChatContext = createContext<ChatContextType | undefined>(undefined)

// export const useChatContext = () =>{
//     const context  = useContext(ChatContext);
//     if(!context) {
//       throw new Error('useChatContext must be used within a ChatProvider');
//     }
//     return context;
// }


// interface ChatProviderProps {
//     children?: React.ReactNode;
// }

// export const ChatProvider: FC<ChatProviderProps> = ({ children }) => {


//     const contextValue: ChatContextType = {
//         posts,
//         setPosts,
//         fetchChat,
//       };


//       return <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>;
// }

// export default ChatContext;

export {}