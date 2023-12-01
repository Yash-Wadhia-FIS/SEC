
import { bot, user } from "../assets/collection"

export const chatStyle = {
  chatWindow: {
    welcomeMessage: "Halo saya asisten 🧕 #askBJB , Ada yang bisa saya bantu 🙏",
    backgroundColor: "#ffffff",
    height: 580,
    fontFamily: "Plus Jakarta Sans, sans-serif",
    width: 900,
    fontSize: 16,
    poweredByTextColor: "#303235",
    botMessage: {
      backgroundColor: "#f7f8ff",
      textColor: "#303235",
      showAvatar: true,
      avatarSrc: bot,
      fontFamily: "Plus Jakarta Sans, sans-serif",
    },
    userMessage: {
      backgroundColor: "#3B81F6",
      textColor: "#ffffff",
      showAvatar: true,
      avatarSrc: user,
      fontFamily: "Plus Jakarta Sans, sans-serif",
    },
    textInput: {
      placeholder: "Type your question",
      backgroundColor: "#ffffff",
      textColor: "#303235",
      sendButtonColor: "#3B81F6",
      fontFamily: "Plus Jakarta Sans, sans-serif",
    },
    overflowY: 'auto',
  },
};
