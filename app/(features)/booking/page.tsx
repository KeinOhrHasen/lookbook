'use client';

import { useEffect, useRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';

export default function Booking() {
  const [selected, setSelected] = useState<Date>();
  const nameRef = useRef(null);

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }

  useEffect(() => {
    nameRef.current.focus();
  });

  const bookDate = () => {
    console.log(nameRef.current?.value);
    console.log(selected);
  };

  return (
    <div className="p-24">
      <label className="ml-4">Enter name</label>
      <input type="input" id="name" name="name" ref={nameRef} className="w-80 m-3"></input>
      <DayPicker mode="single" selected={selected} onSelect={setSelected} footer={footer} />
      <Button onClick={bookDate} className="ml-4">
        Submit
      </Button>
    </div>
  );
}
