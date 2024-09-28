'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { generateChatResponse } from '@/src/core/utils/actions';

export enum Role {
  user = 'user',
  system = 'system',
  assistant = 'assistant',
}
export interface IMessage {
  role: Role;
  content: string;
}

export default function Chat() {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState<IMessage[]>([]);

  const { mutate, isPending } = useMutation({
    mutationFn: (query: IMessage) => generateChatResponse([...messages, query]),
    onSuccess: (response) => {
      if (!response) {
        toast.error('Something went wrong...');
        return;
      }

      setMessages((prev) => [...prev, response as IMessage]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = { role: Role.user, content: text };

    mutate(query);
    setMessages((prev) => [...prev, query]);
    setText('');
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto] px-24 pt-24 pb-4 bg-slate-300">
      <div>
        {messages.map(({ role, content }, index) => {
          const avatar = role == 'user' ? '👤' : '🤖';
          const bcg = role === 'user' ? 'bg-slate-300' : 'bg-slate-100';
          return (
            <div key={index} className={`${bcg} flex py-6 -mx-8 px-8 text-xl leading-loose border-b border-base-300`}>
              <span className="mr-4">{avatar}</span>
              <p className="max-w-3xl">{content}</p>
            </div>
          );
        })}
        {isPending ? <span className="SOME_SPINNER"></span> : null}
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
