'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ENVIRONMENT } from '@/src/core/configs/environment';
import axios from 'axios';

const formSchema = z.object({
  name: z.string().min(6, {
    message: 'Grid name must be at least 6 characters.',
  }),
  columns: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z
      .number()
      .positive()
      .min(1, {
        message: 'Columns amount must be bigger than 0.',
      })
      .max(6, {
        message: 'Columns amount must be less than 7.',
      }),
  ),
});

export default function NewGrid() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      columns: 1,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    axios
      .post(`${ENVIRONMENT.apiURL}/grid`, JSON.stringify(values), {
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
        router.push('/grids');
      });
  }

  return (
    <div className="p-24 bg-slate-300 h-full">
      <h1 className="title">New Grid</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Grid Name</FormLabel>
                <FormControl>
                  <Input placeholder="name" {...field} />
                </FormControl>
                <FormDescription>This is grid name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="columns"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Columns</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="columns" {...field} />
                </FormControl>
                <FormDescription>This is amount of columns in grid.</FormDescription>
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
