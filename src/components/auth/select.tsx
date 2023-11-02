import React from 'react';
import { Formik, Form, Field, FieldProps } from 'formik';
import Select from 'react-select';

interface CustomOption {
  value: string;
  label: string;
}

interface MyFormProps {
  label: string;
  name: string;
  options: CustomOption[];
}

const MyForm: React.FC<MyFormProps> = ({ label, name, options  }) => (
  <div>
    <Formik initialValues={{ [name]: '' }} onSubmit={(values) => console.log('Form submitted with values:', values)}>
      <Form>
        <label htmlFor={name}>{label}</label>
        <Field name={name}>
          {({ field, form }: FieldProps<string>) => (
            <Select
              {...field}
              options={options}
              onChange={(option) => {
                form.setFieldValue(name, option?.value || '');
              }}
              value={options.find((option) => option.value === field.value)}
            />
          )}
        </Field>
      </Form>
    </Formik>
  </div>
);

export default MyForm;
