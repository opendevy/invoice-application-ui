import React, { useState, FC } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useCreateEmployeeAction } from "../../../../../hooks/redux";
import {EmployeeCreateRequest} from "../../../../../interfaces";

interface IAddEmployeeModalProps {
  isOpened: boolean;
  handleModal: () => void;
}

const AddEmployeeModal: FC<IAddEmployeeModalProps> = ({
  isOpened,
  handleModal
}) => {
  const addNewEmployee = useCreateEmployeeAction();
  const [newEmployeeData, setNewEmployeeData] = useState<EmployeeCreateRequest>({
    name: '',
    email: ''
  });

  const handleClose = () => {
    handleModal();
  };

  const handleSave = async () => {
    await addNewEmployee(newEmployeeData);
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
          <TextField
            autoFocus
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            sx={{ marginTop: 2 }}
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
