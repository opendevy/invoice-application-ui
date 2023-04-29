import React, { useState, FC } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useCreateClientAction } from "../../../../hooks/redux";
import {ClientCreateRequest} from "../../../../interfaces";

interface IAddEmployeeModalProps {
  isOpened: boolean;
  handleModal: () => void;
}

const AddEmployeeModal: FC<IAddEmployeeModalProps> = ({
  isOpened,
  handleModal
}) => {
  const addNewClient = useCreateClientAction();
  const [newEmployeeData, setNewEmployeeData] = useState<ClientCreateRequest>({
    name: ''
  });

  const handleClose = () => {
    handleModal();
  };

  const handleSave = async () => {
    await addNewClient(newEmployeeData);
    handleClose();
  };

  const handleNewEmployeeData = (e: any) => {
    setNewEmployeeData({
      ...newEmployeeData,
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
          Add Employee
        </DialogTitle>
        <DialogContent
          sx={{
            width: 400
          }}
        >
          <TextField
            autoFocus
            name="name"
            label="Employee Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => handleNewEmployeeData(e.target)}
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

export default AddEmployeeModal;
