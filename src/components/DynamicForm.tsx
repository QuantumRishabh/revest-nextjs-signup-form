'use client';

import { useForm } from 'react-hook-form';
import { formConfig } from '../data/formConfig';
import { FormField } from './FormField';
import { Button, Box, Typography } from '@mui/material';

export default function DynamicForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    localStorage.setItem('formData', JSON.stringify(data));
    alert('Form submitted!');
    console.log(data);
  };

  return (
    <Box maxWidth={500} mx="auto" mt={5} p={3} borderRadius={2} boxShadow={3}>
      <Typography variant="h5" mb={3}>Signup Form</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formConfig.data.map(field => (
          <FormField key={field.id} field={field} register={register} errors={errors} />
        ))}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
}
