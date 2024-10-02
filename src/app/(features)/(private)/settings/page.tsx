'use client';

import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Button } from '@/components/ui/button';

const initialState = { locale: 'UK' };

interface Values {
  locale: string;
}

export default function Settings() {
  const locales = ['Ukraine', 'UK'];

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
              Select app locale:
            </label>
            <Field as="select" name="theme">
              {locales.map((locale) => (
                <option key={locale} value={locale}>
                  {locale}
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
