'use server';

import { ENVIRONMENT } from '@/src/core/configs/environment';
import axios from 'axios';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export const bookDateRequest = async (prevState, formData) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const content = formData;
  const NewSession = z.object({
    name: z.string(),
    date: z.string(),
    time: z.string(),
    productType: z.string(),
    details: z.string(),
    phone: z.string(),
    email: z.string(),
  });
  try {
    NewSession.parse({ date, name, time, productType, details, phone, email });
    await axios
      .post(`${ENVIRONMENT.apiURL}/sessions/create`, JSON.stringify(content), {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(function (response) {
        console.log(response);
      });
    revalidatePath('/booking');
    return { message: 'success' };
  } catch (error) {
    console.log(error);
    return { message: 'error' };
  }
};
