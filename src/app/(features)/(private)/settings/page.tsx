'use client';

import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Button } from '@/components/ui/button';

const initialState = { theme: 'light' };

interface Values {
  theme: string;
}

export default function Settings() {
  const themes = ['light', 'dark', 'system'];

  const handleSubmit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
    alert(JSON.stringify(values));
    setSubmitting(false);
  };

  return (
    <div className="px-24 pt-24 pb-40 bg-slate-300 h-full">
      <Formik initialValues={initialState} onSubmit={handleSubmit}>
        <Form>
          <div className="bg-slate-100 p-8">
            <label htmlFor="name" className="pt-10 mr-8">
              Select app theme:
            </label>
            <Field as="select" name="theme">
              {themes.map((themeItem) => (
                <option key={themeItem} value={themeItem}>
                  {themeItem}
                </option>
              ))}
            </Field>
          </div>
          <Button type="submit" className="block mt-8">
            Submit
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
