import React, { FC, useEffect } from 'react';
import {
  useCreateProjectAction,
  useFetchProjectsAction,
  useClientState
} from '../../../../../hooks/redux';
import { ProjectCreateRequest } from '../../../../../interfaces';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface IAddProjectModalProps {
  isOpened: boolean;
  handleModal: () => void;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  budget: Yup.string().required('Budget is required'),
  client: Yup.string().required('Client is required')
});

const AddProjectModal: FC<IAddProjectModalProps> = ({
  isOpened,
  handleModal
}) => {
  const addNewProject = useCreateProjectAction();
  const { clients } = useClientState();
  const fetchProjects = useFetchProjectsAction();

  const handleSubmit = async (values: ProjectCreateRequest) => {
    await addNewProject(values);
    handleClose();
  }

  const form = useFormik({
    validationSchema,
    initialValues: {
      name: '',
      budget: '',
      client: ''
    },
    onSubmit: handleSubmit
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleClose = () => {
    handleModal();
  };

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
          Add Project
        </DialogTitle>
        <DialogContent
          sx={{
            width: 400
          }}
        >
          <form onSubmit={form.handleSubmit}>
            <TextField
              sx={{ marginBottom: 2 }}
              autoFocus
              label='Project Name'
              type='text'
              fullWidth
              variant='standard'
              {...form.getFieldProps('name')}
              helperText={ form.errors.name && form.touched.name ? form.errors.name : '' }
            />
            <TextField
              autoFocus
              label='Budget'
              type='text'
              fullWidth
              variant='standard'
              helperText={ form.errors.budget && form.touched.budget ? form.errors.budget : '' }
              {...form.getFieldProps('budget')}
            />
            <FormControl fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id='demo-simple-select-label'>
                Client
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                label='Client'
                {...form.getFieldProps('client')}
                  // helperText={ form.errors.client && form.touched.client ? form.errors.client : '' }
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
            <div className='my-2 space-x-2'>
              <Button
                type='submit'
                variant='outlined'
              >
                Save
              </Button>
              <Button
                onClick={handleClose}
                variant='outlined'
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddProjectModal;
