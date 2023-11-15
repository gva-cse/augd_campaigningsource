// gptService.js
import axios from 'axios';

const GPT_ENDPOINT = 'YOUR_GPT_API_ENDPOINT';
const GPT_API_KEY = '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';

const getGPTResponse = async (message) => {
  try {
    const response = await axios.post(
      GPT_ENDPOINT,
      {
        message: message,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GPT_API_KEY}`,
        },
      }
    );

    return response.data.generatedText; // Adjust the property based on the response structure
  } catch (error) {
    console.error('Error fetching GPT response:', error);
    return 'Sorry, I encountered an error.';
  }
};

export default getGPTResponse;
