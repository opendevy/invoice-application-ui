import React  from 'react';
import { Link } from 'react-router-dom';
import { useRegisterAction } from '../../../hooks/redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ROUTES } from '../../../constants';
import {
  Typography,
  TextField,
  Button
} from '@mui/material';
import { UserFormValues } from '../../../interfaces';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string().required('Confirm password is required')
});

const Register = () => {
  const register = useRegisterAction();

  const handleSubmit = async (values: UserFormValues) => {
    const { confirmPassword, ...data } = values;
    await register(data);
  };

  const form = useFormik({
    validationSchema,
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: handleSubmit
  });

  return (
    <div className='py-4 px-8'>
      <div className='text-center'>
        <Typography
          variant='h5'
          color='primary'
          mb={3}
        >
          REGISTER
        </Typography>
        <Typography
          variant='body1'
          mb={3}
        >
          Welcome! Please enter your information
        </Typography>
      </div>

      <form onSubmit={form.handleSubmit}>
        <TextField
          fullWidth
          label='Name'
          {...form.getFieldProps('name')}
          helperText={ form.errors.name && form.touched.name ? form.errors.name : '' }
          sx={{ mb: 3 }}
        />
        <TextField
          fullWidth
          label='Email'
          {...form.getFieldProps('email')}
          helperText={ form.errors.email && form.touched.email ? form.errors.email : '' }
          sx={{ mb: 3 }}
        />
        <TextField
          fullWidth
          label='Password'
          type='password'
          placeholder='Enter your password'
          {...form.getFieldProps('password')}
          helperText={ form.errors.password && form.touched.password ? form.errors.password : '' }
          sx={{ mb: 3 }}
        />
        <TextField
          fullWidth
          label='Confirm Password'
          type='password'
          {...form.getFieldProps('confirmPassword')}
          helperText={ form.errors.confirmPassword && form.touched.confirmPassword ? form.errors.confirmPassword : '' }
          sx={{ mb: 3 }}
        />

        <div>
          <Link
            to={ROUTES.AUTH.LOGIN}
          >
            Go to login
          </Link>
        </div>
        <div className='flex items-center justify-center'>
          <Button
            type='submit'
            variant='contained'
            color='primary'
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
