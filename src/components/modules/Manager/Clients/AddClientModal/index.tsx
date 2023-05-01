import React, { FC } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle
} from '@mui/material';
import { useCreateClientAction } from '../../../../../hooks/redux';
import { ClientCreateRequest } from '../../../../../interfaces';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface IAddClientModalProps {
  isOpened: boolean;
  handleModal: () => void;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required')
});

const AddClientModal: FC<IAddClientModalProps> = ({
  isOpened,
  handleModal
}) => {
  const addNewClient = useCreateClientAction();

  const handleClose = () => {
    handleModal();
  };

  const handleSubmit = async (values: ClientCreateRequest) => {
    await addNewClient(values);
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
          Add Client
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
              label='Client Name'
              type='text'
              fullWidth
              variant='standard'
              {...form.getFieldProps('name')}
            />
            <TextField
              helperText={ form.errors.email && form.touched.email ? form.errors.email : '' }
              label='Email'
              type='text'
              fullWidth
              variant='standard'
              {...form.getFieldProps('email')}
            />
            <div className='my-2 space-x-2'>
              <Button type='submit' variant='outlined'>
                Save
              </Button>
              <Button onClick={handleClose} variant='outlined'>
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddClientModal;
