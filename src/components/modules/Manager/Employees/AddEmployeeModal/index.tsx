import React, { FC } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle
} from '@mui/material';
import { useCreateEmployeeAction } from '../../../../../hooks/redux';
import { EmployeeCreateRequest } from '../../../../../interfaces';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface IAddEmployeeModalProps {
  isOpened: boolean;
  handleModal: () => void;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const AddEmployeeModal: FC<IAddEmployeeModalProps> = ({
  isOpened,
  handleModal
}) => {
  const addNewEmployee = useCreateEmployeeAction();

  const handleClose = () => {
    handleModal();
  };

  const handleSubmit = async (values: EmployeeCreateRequest) => {
    await addNewEmployee(values);
    handleClose();
  }

  const form = useFormik({
    validationSchema,
    initialValues: {
      name: '',
      email: ''
    },
    onSubmit: handleSubmit
  });

  return (
    <div>
      <Dialog
        open={isOpened}
        onClose={handleClose}
        maxWidth='lg'
      >
        <DialogTitle
          sx={{
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          Add Employee
        </DialogTitle>
        <DialogContent
          sx={{
            width: 400
          }}
        >
          <form onSubmit={form.handleSubmit}>
            <TextField
              autoFocus
              helperText={ form.errors.name && form.touched.name ? form.errors.name : '' }
              label='Employee Name'
              type='text'
              fullWidth
              variant='standard'
              {...form.getFieldProps('name')}
            />
            <TextField
              autoFocus
              {...form.getFieldProps('email')}
              label='Email'
              type='email'
              fullWidth
              variant='standard'
              sx={{ marginTop: 2 }}
              helperText={ form.errors.email && form.touched.email ? form.errors.email : '' }
            />
            <div className='my-2 space-x-2'>
              <Button
                type='submit'
                variant='outlined'
              >
                Save
              </Button>
              <Button
                onClick={handleClose}
                variant='outlined'
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddEmployeeModal;
