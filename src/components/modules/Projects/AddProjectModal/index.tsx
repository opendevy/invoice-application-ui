import React, { useState, FC, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {
  useCreateProjectAction,
  useFetchProjectsAction,
  useClientState
} from "../../../../hooks/redux";
import { ProjectCreateRequest } from "../../../../interfaces";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material";

interface IAddProjectModalProps {
  isOpened: boolean;
  handleModal: () => void;
}

const AddProjectModal: FC<IAddProjectModalProps> = ({
  isOpened,
  handleModal
}) => {
  const addNewProject = useCreateProjectAction();
  const { clients } = useClientState();
  const fetchProjects = useFetchProjectsAction();
  const [newProjectData, setNewProjectData] = useState<ProjectCreateRequest>({
    name: '',
    budget: 0,
    client: ''
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleClose = () => {
    handleModal();
  };

  const handleSave = async () => {
    await addNewProject(newProjectData);
    handleClose();
  };

  const handleNewProjectData = (e: any) => {
    setNewProjectData({
      ...newProjectData,
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
          Add Project
        </DialogTitle>
        <DialogContent
          sx={{
            width: 400
          }}
        >
          <TextField
            sx={{ marginBottom: 2 }}
            autoFocus
            name="name"
            label="Project Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => handleNewProjectData(e.target)}
          />
          <TextField
            autoFocus
            name="budget"
            label="Budget"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => handleNewProjectData(e.target)}
          />
          <FormControl fullWidth sx={{ marginTop: 2 }}>
            <InputLabel id="demo-simple-select-label">Client</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={newProjectData.client}
              label="Client"
              name="client"
              onChange={(e) => handleNewProjectData(e.target)}
            >
              {
                clients.map((item) => (
                  <MenuItem value={item._id} key={item._id}>
                    {item.name}
                  </MenuItem>
                ))
              }
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

export default AddProjectModal;
