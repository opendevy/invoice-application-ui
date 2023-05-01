import React, { FC } from 'react';
import { Button, TextField, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useUpdateClientAction } from "../../../../../hooks/redux";
import { ClientUpdateRequest } from "../../../../../interfaces";
import { ClientModel } from "../../../../../resources/models";
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface IUpdateClientModalProps {
  isOpened: boolean;
  handleModal: () => void;
  client: ClientModel;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required')
});

const UpdateClientModal: FC<IUpdateClientModalProps> = ({
  isOpened,
  handleModal,
  client
}) => {
  const updateClient = useUpdateClientAction();

  const handleClose = () => {
    handleModal();
  };

  const handleSubmit = async (values: ClientUpdateRequest) => {
    await updateClient(values, client._id);
    handleClose();
  };

  const form = useFormik({
    validationSchema,
    initialValues: {
      name: client.name
    },
    onSubmit: handleSubmit
  });

  return (
    <div>
      <Dialog
        open={isOpened}
        onClose={handleClose}
        maxWidth="lg"
      >
        <DialogTitle
          sx={{
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          Update Client
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
              label="Client Name"
              type="text"
              fullWidth
              variant="standard"
              {...form.getFieldProps('name')}
            />
            <div className="my-2 space-x-2">
              <Button type="submit" variant="outlined">
                Save
              </Button>
              <Button onClick={handleClose} variant="outlined">
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UpdateClientModal;
