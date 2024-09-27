'use server';

import { ENVIRONMENT } from '@/src/core/configs/environment';
import axios from 'axios';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateChatResponse = async (chatMessage) => {
  const response = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: 'Hey there! I am tour assistant' },
      { role: 'user', content: chatMessage },
    ],
    model: 'gpt-3.5-turbo',
    temperature: 1,
  });

  console.log(response.choices[0].message);
  console.log(response);

  return 'awesome';
};

export const fetchUserTokensById = (a) => {};
export const subtractTokens = (a, b) => {};
