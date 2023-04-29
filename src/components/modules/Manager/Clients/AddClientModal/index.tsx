import React, { useState, FC } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useCreateClientAction } from "../../../../../hooks/redux";
import {ClientCreateRequest} from "../../../../../interfaces";

interface IAddClientModalProps {
  isOpened: boolean;
  handleModal: () => void;
}

const AddClientModal: FC<IAddClientModalProps> = ({
  isOpened,
  handleModal
}) => {
  const addNewClient = useCreateClientAction();
  const [newClientData, setNewClientData] = useState<ClientCreateRequest>({
    name: ''
  });

  const handleClose = () => {
    handleModal();
  };

  const handleSave = async () => {
    await addNewClient(newClientData);
    handleClose();
  };

  const handleNewClientData = (e: any) => {
    setNewClientData({
      ...newClientData,
      [e.name]: e.value
    });
  };

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
          Add Client
        </DialogTitle>
        <DialogContent
          sx={{
            width: 400
          }}
        >
          <TextField
            autoFocus
            name="name"
            label="Client Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => handleNewClientData(e.target)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave}>
            Save
          </Button>
          <Button onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddClientModal;
