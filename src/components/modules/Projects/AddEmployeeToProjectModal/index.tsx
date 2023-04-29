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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface IAddEmployeeToProjectModalProps {
  isOpened: boolean;
  handleModal: () => void;
}

const AddEmployeeToProjectModal: FC<IAddEmployeeToProjectModalProps> = ({
  isOpened,
  handleModal
}) => {
  const { employees } = useEmployeeState();
  const fetchEmployees = useFetchEmployeesAction();
  const [employeesName, setEmployeesName] = useState<string[]>([]);
  const [selectedEmployees, setSelectedEmployees] = useState<string[]>([]);
  
  useEffect(() => {
    fetchEmployees();
  }, []);
  
  useEffect(() => {
    // setSelectedEmployees();
  }, [employeesName]);
  
  const handleChange = (event: SelectChangeEvent<typeof employeesName>) => {
    const {
      target: { value },
    } = event;
    setEmployeesName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  
  const handleClose = () => {
    handleModal();
  };
  
  const handleSave = async () => {
    handleClose();
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
          Add Employee To Project
        </DialogTitle>
        <DialogContent
          sx={{
            width: 400
          }}
        >
          <FormControl sx={{ my: 1 }} fullWidth>
            <InputLabel id="demo-multiple-chip-label">Employees</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={employeesName}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Employees" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {employees.map((employee) => (
                <MenuItem
                  key={employee._id}
                  value={employee.name}
                >
                  {employee.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
