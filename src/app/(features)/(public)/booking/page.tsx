'use client';

import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ENVIRONMENT } from '@/src/core/configs/environment';
import axios from 'axios';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  name: z.string().min(3, {
    message: 'Grid name must be at least 3 characters.',
  }),
  productType: z.string(),
  details: z.string(),
  phone: z.string(),
  email: z.string().email().email({
    message: 'Type valid email',
  }),
});

export default function Booking() {
  const [date, setDate] = useState<Date>();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });

  let footer = <p>Please pick a day.</p>;
  if (date) {
    footer = <p>You picked {format(date, 'PP')}.</p>;
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(date, values);
    axios
      .post(`${ENVIRONMENT.apiURL}/sessions/create`, JSON.stringify({ ...values, date, status: 'requested' }), {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        router.push('/sessions');
      });
  }

  return (
    <div className="px-24 py-12 bg-slate-300">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="name" {...field} />
                </FormControl>
                <FormDescription>Contact name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Date</FormLabel>
              </FormItem>
            )}
          />
          <DayPicker mode="single" selected={date} onSelect={setDate} footer={footer} />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="phone" {...field} />
                </FormControl>
                <FormDescription>Your Phone</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="productType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type of photo session" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="personal">personal</SelectItem>
                    <SelectItem value="couple">couple</SelectItem>
                    <SelectItem value="family">family</SelectItem>
                    <SelectItem value="wedding">wedding</SelectItem>
                    <SelectItem value="studio">studio</SelectItem>
                    <SelectItem value="smm">smm</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Details</FormLabel>
                <FormControl>
                  <Input placeholder="details" {...field} />
                </FormControl>
                <FormDescription>Additional details or preferences</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
                <FormDescription>Email or other contact info</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Create</Button>
        </form>
      </Form>
    </div>
  );
}
