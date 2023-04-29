import React, { useState, FC } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useUpdateClientAction} from "../../../../../hooks/redux";
import {ClientCreateRequest, ClientUpdateRequest} from "../../../../../interfaces";
import {ClientModel} from "../../../../../resources/models";

interface IUpdateClientModalProps {
  isOpened: boolean;
  handleModal: () => void;
  client: ClientModel;
}

const UpdateClientModal: FC<IUpdateClientModalProps> = ({
  isOpened,
  handleModal,
  client
}) => {
  const updateClient = useUpdateClientAction();
  const [clientData, setClientData] = useState<ClientUpdateRequest>({
    name: client.name
  });

  const handleClose = () => {
    handleModal();
  };

  const handleSave = async () => {
    await updateClient(clientData, client._id);
    handleClose();
  };

  const handleNewClientData = (e: any) => {
    setClientData({
      ...clientData,
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
          Update Client
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
            value={clientData.name}
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

export default UpdateClientModal;
