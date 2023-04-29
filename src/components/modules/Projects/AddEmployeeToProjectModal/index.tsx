import React, {useState, FC, useEffect} from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@mui/material";
import {useEmployeeState, useFetchEmployeesAction} from "../../../../hooks/redux";
import TextField from "@mui/material/TextField";

interface IAddEmployeeToProjectModalProps {
  isOpened: boolean;
  handleModal: () => void;
}

const AddEmployeeToProjectModal: FC<IAddEmployeeToProjectModalProps> = ({
  isOpened,
  handleModal
}) => {
  const [employee, setEmployee] = useState('');
  const [rate, setRate] = useState('');
  const { employees } = useEmployeeState();
  const fetchEmployees = useFetchEmployeesAction();
  
  useEffect(() => {
    fetchEmployees();
  }, []);
  
  const handleClose = () => {
    handleModal();
  };
  
  const handleSave = async () => {
    handleClose();
  };
  
  const handleChange = (event: SelectChangeEvent) => {
    setEmployee(event.target.value as string);
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
            textAlign: 'center',
            marginTop: 1
          }}
        >
          Add Employee To Project
        </DialogTitle>
        <DialogContent
          sx={{
            width: 400
          }}
        >
          <FormControl fullWidth sx={{ marginTop: 2 }}>
            <InputLabel id="demo-simple-select-label">Employee</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={employee}
              label="Employee"
              onChange={handleChange}
            >
              {
                employees.map((employee) => (
                  <MenuItem value={employee._id}>
                    {employee.name}
                  </MenuItem>
                ))
              }
            </Select>
          </FormControl>
          <TextField
            autoFocus
            name="rate"
            label="Hourly Rate"
            type="number"
            fullWidth
            variant="standard"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
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

export default AddEmployeeToProjectModal;
