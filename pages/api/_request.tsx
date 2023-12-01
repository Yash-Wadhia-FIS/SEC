import axios from 'axios';
import {chatMsg} from "../../http/apiCollection"
import {useAuth} from "../../src/contexts/AuthContext"

export const sendMessage = async (chatId: string, prompt: string, isAuthenticated: boolean) => {
  if (!isAuthenticated) {
    console.error('User is not authenticated.');
    return; // You might want to handle this case according to your application logic
  }

  const url = chatMsg;
  const accessToken = localStorage.getItem('accessToken');

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };

  const data = {
    chatId,
    prompt,
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log("request",response);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
};
