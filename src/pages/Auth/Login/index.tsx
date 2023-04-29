import React  from 'react';
import { Link } from 'react-router-dom';
import { useLoginAction } from '../../../hooks/redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ROUTES } from '../../../constants';
import {
  Typography,
  TextField,
  Button
} from '@mui/material';
import { LoginRequest } from '../../../interfaces';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required')
});

const Login = () => {
  const login = useLoginAction();

  const handleSubmit = async (values: LoginRequest) => {
    await login(values);
  };

  const form = useFormik({
    validationSchema,
    initialValues: {
      name: '',
      password: '',
    },
    onSubmit: handleSubmit
  });

  return (
    <div className=''>
      <div className='px-8 py-4'>
        <div className='text-center'>
          <Typography
            variant="h5"
            color="primary"
            mb={3}
          >
            LOGIN
          </Typography>
          <Typography
            variant="body1"
            mb={3}
          >
            Welcome back! Please enter your information
          </Typography>
        </div>

        <form onSubmit={form.handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            {...form.getFieldProps('name')}
            helperText={ form.errors.name && form.touched.name ? form.errors.name : '' }
            sx={{ mb: 3 }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...form.getFieldProps('password')}
            helperText={ form.errors.password && form.touched.password ? form.errors.password : '' }
            sx={{ mb: 3 }}
          />

          <div className='flex items-center justify-around'>
            <Link
              to={ROUTES.AUTH.REGISTER}
            >
              Are you registered?
            </Link>
            <Link
              to={ROUTES.AUTH.FORGOT_PASSWORD}
            >
              Forgot password?
            </Link>
          </div>
          <div className='flex justify-center py-4'>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
