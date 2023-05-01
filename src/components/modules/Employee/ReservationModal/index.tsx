import React, { useState, FC } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useAccount} from "../../../../context/account.context";
import {ProjectModel} from "../../../../resources/models";
// import { useCreateEmployeeAction } from "../../../../../hooks/redux";
// import {EmployeeCreateRequest} from "../../../../../interfaces";

interface IReservationModalProps {
  isOpened: boolean;
  handleModal: () => void;
  projectData: ProjectModel;
  fetchProject: () => void;
}

const ReservationModal: FC<IReservationModalProps> = ({
  isOpened,
  handleModal,
  projectData,
  fetchProject
}) => {
  const { createReservation } = useAccount();
  const [hourlyRate, setHourlyRate] = useState('');
  
  const handleClose = () => {
    handleModal();
  };
  
  const handleSave = async () => {
    await createReservation(projectData._id, hourlyRate).then((res: any) => {
      fetchProject();
      handleClose();
    });
  };
  
  const handleReservationData = (value: any) => {
    setHourlyRate(value);
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
          Reservation Project
        </DialogTitle>
        <DialogContent
          sx={{
            width: 400
          }}
        >
          <TextField
            autoFocus
            name="rate"
            label="Hourly Rate"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => handleReservationData(e.target.value)}
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

export default ReservationModal;
