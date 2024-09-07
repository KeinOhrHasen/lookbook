'use client';

import { useEffect, useRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useFormState, useFormStatus } from 'react-dom';
import { useToast } from '@/components/ui/use-toast';
import { bookDateRequest } from '@/app/_utils/actions';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';

const initialState = {
  message: null,
};

export default function Booking() {
  const [selected, setSelected] = useState<Date>();
  const nameRef = useRef(null);
  const [state, formAction] = useFormState(bookDateRequest, initialState);

  const { toast } = useToast();
  useEffect(() => {
    if (state.message === 'error') {
      toast.error('there was an error');
      return;
    }
    if (state.message) {
      toast({
        title: 'Scheduled: Catch up',
        description: 'Friday, February 10, 2023 at 5:57 PM',
      });
    }
  }, [state]);

  const bookDate = () => {
    console.log(nameRef.current?.value);
    console.log(selected);
  };

  const SubmitBtn = () => {
    const { pending } = useFormStatus();
    return (
      <button type="submit" className="btn btn-primary join-item ml-4" disabled={pending}>
        {pending ? 'please wait...' : 'create task'}
      </button>
    );
  };

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }

  return (
    <div className="p-24">
      <form action={formAction}>
        <label className="ml-4">Enter name</label>
        <input type="input" id="name" name="name" ref={nameRef} className="w-80 m-3"></input>
        <DayPicker mode="single" selected={selected} onSelect={setSelected} footer={footer} />
        <SubmitBtn />
      </form>
    </div>
  );
}
