import React, { FC, useState, useEffect } from 'react';
import { Box, Input, Flex, Avatar, Button } from "@chakra-ui/react";
import { Notes } from '../notes';
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import axios from 'axios';
import { chatApi } from '../../../http/apiCollection'
import userImage from "../../assets/user.png";
import botImage from "../../assets/bot.png";
import styles from '../../../pages/styles.module.css';
import { IoSend } from "react-icons/io5";

type MessageType = {
  type: string;
  post: string;
  links?: any;
  prompt?: null;
  simulateBotTyping?: any;
};

const ChatInner: FC = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState<MessageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);

  console.log(posts);

  const chatMessage = async (userMessage: string) => {
    setIsLoading(true);
    try {
      const apiUrl = chatApi;
      const requestBody = {
        question: userMessage,
        prompt: ""
      };
  
      setPosts((prevState) => [
        ...prevState,
        {
          type: "bot",
          post: "Loading",
        },
      ]);
  
      const response = await axios.post(apiUrl, requestBody);
      const botResponse = response.data?.Response;
  
      console.log('API Response:', response.data);
      console.log('Bot Response:', botResponse);
  
      if (botResponse) {
        simulateBotTyping([botResponse], [], false); // Pass an empty array as the second argument for links
      } else {
        console.error('Empty or invalid data in the API response');
        // Handle empty or invalid data case, possibly display an error in UI
      }
    } catch (error) {
      console.error('Error fetching or processing data:', error);
      // Handle errors, display error message in UI, etc.
    }
    setIsBotTyping(false);
    setIsLoading(false);
  };
  
  
  

  console.log("isValid", isLoading)


  useEffect(() => {
    const layoutElement = document.querySelector(".layout");
    if (layoutElement) {
      layoutElement.scrollTop = layoutElement.scrollHeight;
    }
  }, [posts]);

  const simulateBotTyping = async (responses: string[], links: string[], isNewResponse: boolean) => {
    setPosts((prevState) => {
      const updatedPosts = [...prevState];
      console.log("dkj",updatedPosts);
      updatedPosts.pop(); // Remove the loading message
      updatedPosts.push({
        type: "bot",
        post: responses[0],
        links: links[0] ? [...links[0]] : [],
      });
      return updatedPosts;
    });
  };

  const onSubmit = async () => {
    if (input.trim() === '') return;

    const userMessage = input.trim();
    setPosts((prevState) => [
      ...prevState,
      {
        type: 'user',
        post: userMessage,
      },
    ]);

    setInput('');

    await chatMessage(userMessage);

  };

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.which === 13) {
      onSubmit();

    }
  };

  function formatString(inputString: string): string | null {
    if (!inputString) return null;
  
    const lines: string[] = inputString.split('\n');
    const formattedLines: string[] = [];
  
    lines.forEach((line: string, index: number) => {
      const indentedLine: string = line.replace(/\t/g, '    ');
  
      if (/^\d+\./.test(indentedLine)) {
        const textWithoutNumber: string = indentedLine.replace(/^\d+\.\s*/, '');
        const formattedLine: string =
          `${indentedLine.match(/^\d+\./)![0]} ${textWithoutNumber}`;
        formattedLines.push(formattedLine);
      } else {
        formattedLines.push(indentedLine);
      }
    });
  
    return formattedLines.join('\n');
  }


  return (
    <>
      <Flex direction="column" p={4} minHeight="66vh" position="relative">
        <Box className="layout" maxHeight="520px" overflowY="scroll" css={{
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#a0aec0',
            borderRadius: '8px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#718096',
          },
        }}>
          {posts.length === 0 && (
            <Box >
              <Box display="flex"
                alignItems="flex-start"
                fontSize="14px"
                color="#636363"
                fontFamily="'Poppins', sans-serif">
                Hello 👋👋. I'm 😊 #Saudi Electricity , Is there anything I can help with 🙏
              </Box>
            </Box>
          )}
          {posts.map((post, index) => {
           {console.log(post)}
            return (

              <Flex

                key={index}
                justifyContent={post.type === "user" ? "flex-end" : "flex-start"}
                marginTop={index !== 0 && posts[index - 1].type !== post.type ? "16px" : "0"}
              >
                <Avatar src={post.type === "user" ? userImage.src : botImage.src} marginRight="5px" width="50px" />
                <Box
                  className={`chat-bubble ${post.type === "bot" ? "bot" : ""}`}
                  padding="8px"
                  borderRadius="5px"
                  backgroundColor={post.post !== 'Loading' ? post.type === "bot" ? "#ffffff" : "#ffffff" : ""}
                  color={post.type === "bot" ? "#414141" : "#737373"}
                >

                    <>
                      {post.post === 'Loading' ?
                        <div>
                          <span className={styles.dots} />
                        </div>
                        :
                        <>
                          <Box
                            whiteSpace="pre-line"
                            fontSize="14px"
                            fontFamily="'Poppins', sans-serif"
                          >
                            {formatString(post.post)}
                          </Box>
                        </>}
                    </>
                  
                </Box>
              </Flex>
            )
          })}  
        </Box >
      </Flex >
      <Flex mt="auto" width="100%">
        <Input
          className="composebar"
          minH="54px"
          fontFamily={"'Poppins', sans-serif"}
          h="100%"
          border="1px solid"
          borderRadius="45px"
          p="15px 20px"
          me="10px"
          fontSize="sm"
          fontWeight="500"
          value={input}
          autoFocus
          type="text"
          placeholder="Ask anything!"
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={onKeyUp}
          focusBorderColor="#ff7300" // Set the focus border color
        />

        <Button
          color={"#ffffff"}
          fontWeight={"700"}
          bg={"#ff7300"}
          py="20px"
          px="16px"
          fontSize="sm"
          borderRadius="45px"
          ms="auto"
          w={{ base: '160px', md: '210px' }}
          h="54px"

          _hover={{
            color: "#fff",
            fontWeight: "700",
            backgroundColor: '#ff7900',
            cursor: 'pointer',

          }}
          _focus={{
            outline: 'none',
          }}
          onClick={onSubmit}
        >
          <Box fontFamily="'Poppins', sans-serif"

          ><IoSend style={{ color: 'white', fontSize: '24px' }} /></Box>
        </Button>
      </Flex>
      {/* <Notes /> */}
    </>
  );
};

export { ChatInner };