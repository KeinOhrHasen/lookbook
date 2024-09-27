'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { fetchUserTokensById, generateChatResponse, subtractTokens } from '@/src/core/utils/actions';

export default function Chat() {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const userId = 144112;
  const isPending = false;

  const { mutate } = useMutation({
    mutationFn: (message: string) => generateChatResponse(message),
    // {
    // const currentTokens = await fetchUserTokensById(userId);

    // if (currentTokens < 100) {
    //   toast.error('Token balance too low....');
    //   return;
    // }

    // const response = await generateChatResponse(messages);

    // if (!response) {
    //   toast.error('Something went wrong...');
    //   return;
    // }
    // setMessages((prev) => [...prev, response.message]);
    // const newTokens = await subtractTokens(userId, response.tokens);
    // toast.success(`${newTokens} tokens remaining...`);
    // },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(text);
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto] px-24 pt-24 pb-4 bg-slate-300">
      <div>
        {messages.map(({ role, content }, index) => {
          const avatar = role == 'user' ? '👤' : '🤖';
          const bcg = role === 'user' ? 'bg-base-200' : 'bg-base-100';
          return (
            <div key={index} className={`${bcg} flex py-6 -mx-8 px-8 text-xl leading-loose border-b border-base-300`}>
              <span className="mr-4">{avatar}</span>
              <p className="max-w-3xl">{content}</p>
            </div>
          );
        })}
        {isPending ? <span className="loading"></span> : null}
      </div>
      <form onSubmit={handleSubmit} className="max-w-4xl pt-12">
        <div className="flex w-full">
          <Input
            type="text"
            placeholder="Message GeniusGPT"
            className="input input-bordered join-item w-full"
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          />
          <Button className="btn btn-primary join-item ml-8" type="submit" disabled={isPending}>
            {isPending ? 'please wait...' : 'ask question'}
          </Button>
        </div>
      </form>
    </div>
  );
}
