import React, { useEffect, useState } from 'react';
import * as EmployeeService from '../../../services/employee.service';
import { EmployeeModel } from '../../../resources/models';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router';
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Slide,
  TextField
} from '@mui/material';
import { FaTrash } from 'react-icons/fa';
import { TransitionProps } from '@mui/material/transitions';
import { useDeleteEmployeeAction, useUpdateEmployeeAction } from '../../../hooks/redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from "react-toastify";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required')
});

const EmployeeDetail = () => {
  const deleteEmployeeAction = useDeleteEmployeeAction();
  const updateEmployeeAction = useUpdateEmployeeAction();
  const { pathname } = useLocation();
  const router = useHistory();
  const employeeId = pathname.split('/')[2];
  const [employee, setEmployee] = useState<EmployeeModel | undefined>();
  const [isDeleteModalOpened, setIsDeleteModalOpened] = useState(false);
  
  useEffect(() => {
    EmployeeService.fetchEmployee(employeeId).then((res) => {
      setEmployee(res);
      form.setValues({ name: res.name });
    })
  }, []);

  const handleSubmit = async (values: any) => {
    await updateEmployeeAction(values, employeeId);
    toast.success('Name is changed!');
  };

  const form = useFormik({
    validationSchema,
    initialValues: {
      name: ''
    },
    onSubmit: handleSubmit
  });
  
  const goBack = () => {
    router.push('/employees');
  };
  
  const handleDeleteModal = () => {
    setIsDeleteModalOpened(!isDeleteModalOpened);
  };
  
  const deleteEmployee = async () => {
    if (employee) {
      await deleteEmployeeAction(employee._id);
      router.push('/employees');
    }
  };
  
  return (
    <div>
      <h2 className='font-bold text-4xl'>
        Employee Detail
      </h2>
      {
        employee &&
        <div className='space-y-4'>
          <div className='mt-8'>
            <Button
              variant='contained'
              color='warning'
              startIcon={<FaTrash />}
              onClick={handleDeleteModal}
            >
              Delete Employee
            </Button>
          </div>
          <form onSubmit={form.handleSubmit}>
            <TextField
              autoFocus
              label='Employee Name'
              fullWidth
              variant='standard'
              {...form.getFieldProps('name')}
              helperText={ form.errors.name && form.touched.name ? form.errors.name : '' }
            />
            <div className='flex justify-around mt-4'>
              <Button
                type='submit'
                variant='contained'
              >
                Update
              </Button>
              <Button
                onClick={goBack}
                variant='contained'
              >
                Go Back
              </Button>
            </div>
          </form>
        </div>
      }
      <Dialog
        open={isDeleteModalOpened}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDeleteModal}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle>
          Are you sure want to delete this employee?
        </DialogTitle>
        <DialogActions>
          <Button
            variant='outlined'
            onClick={handleDeleteModal}
          >
            Cancel
          </Button>
          <Button variant='outlined' onClick={deleteEmployee}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EmployeeDetail;
