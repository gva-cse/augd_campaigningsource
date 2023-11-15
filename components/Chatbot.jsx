// import React, { useState } from 'react';
// import { FaPhoneAlt, FaTimes } from 'react-icons/fa'; // Import icons for open and close

// const Chatbot = () => {
//   const directLineURL =
//     'https://webchat.botframework.com/embed/azureqnabot-bot/gemini?b=azureqnabot-bot&s=UhW5LXUKbQM.85BMRWusjCvgTvmGRbO_yuHG9gte-hj-z-o2OeCNAww&username=You';

//   const [chatbotVisible, setChatbotVisible] = useState(false);

//   const toggleChatbot = () => {
//     setChatbotVisible(!chatbotVisible);
//   };

//   // Function to close the chatbot
//   const closeChatbot = () => {
//     setChatbotVisible(false);
//   };

//   return (
//     <div>
//       {chatbotVisible && (
//         <div
//           style={{
//             position: 'fixed',
//             bottom: '20px',
//             right: '20px',
//             zIndex: '50',
//             width: '400px', // Adjust the width to your preference
//             height: '500px', // Adjust the height to your preference
//             boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)',
//             borderRadius: '10px',
//           }}
//         >
//           <iframe
//             src={directLineURL}
//             title="Chatbot"
//             width="100%"
//             height="100%"
//             frameBorder="0"
//           ></iframe>
//           <div
//             className="absolute top-2 right-2 cursor-pointer"
//             onClick={closeChatbot}
//           >
//             <FaTimes size={20} color="red" />
//           </div>
//         </div>
//       )}
//       <div
//         className={`fixed bottom-12 right-12 z-50 bg-yellow-400 p-3 text-black text-xl rounded-full transition hover:scale-125 ${
//           chatbotVisible ? 'hidden' : ''
//         }`}
//         onClick={toggleChatbot}
//       >
//         <FaPhoneAlt />
//       </div>
//     </div>
//   );
// };

// export default Chatbot;
// Chatbot.js
import React, { useState } from 'react';
import { FaPhoneAlt, FaTimes } from 'react-icons/fa';
import getGPTResponse from '../pages/service/gptService'; // Adjust the path based on your project structure

const Chatbot = () => {
  const directLineURL =
    'https://webchat.botframework.com/embed/azureqnabot-bot/gemini?b=azureqnabot-bot&s=UhW5LXUKbQM.85BMRWusjCvgTvmGRbO_yuHG9gte-hj-z-o2OeCNAww&username=You';

  const [chatbotVisible, setChatbotVisible] = useState(false);

  const toggleChatbot = async () => {
    setChatbotVisible(!chatbotVisible);

    if (!chatbotVisible) {
      const welcomeMessage = await getGPTResponse('Hello');
      // Update the chat window with the welcome message
      // You might use a chat state or a similar mechanism
      console.log(welcomeMessage);
    }
  };

  // Function to close the chatbot
  const closeChatbot = () => {
    setChatbotVisible(false);
  };

  return (
    <div>
      {chatbotVisible && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: '50',
            width: '400px', // Adjust the width to your preference
            height: '500px', // Adjust the height to your preference
            boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)',
            borderRadius: '10px',
          }}
        >
          <iframe
            src={directLineURL}
            title="Chatbot"
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
          <div
            className="absolute top-2 right-2 cursor-pointer"
            onClick={closeChatbot}
          >
            <FaTimes size={20} color="red" />
          </div>
        </div>
      )}
      <div
        className={`fixed bottom-12 right-12 z-50 bg-yellow-400 p-3 text-black text-xl rounded-full transition hover:scale-125 ${
          chatbotVisible ? 'hidden' : ''
        }`}
        onClick={toggleChatbot}
      >
        <FaPhoneAlt />
      </div>
    </div>
  );
};

export default Chatbot;

