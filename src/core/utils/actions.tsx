'use server';

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateChatResponse = async (chatMessages) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [{ role: 'system', content: 'Hey there! I am tour assistant' }, ...chatMessages],
      model: 'gpt-3.5-turbo',
      temperature: 1,
      max_tokens: 200,
    });

    console.log(response.choices[0].message);
    console.log(response);

    return response.choices[0].message;
  } catch (error) {
    return null;
  }
};
