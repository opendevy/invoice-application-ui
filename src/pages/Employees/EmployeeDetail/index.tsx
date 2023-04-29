import React, {useEffect, useState} from "react";
import * as EmployeeService from "../../../services/employee.service";
import {EmployeeModel} from "../../../resources/models";
import {useLocation} from "react-router-dom";
import {useHistory} from "react-router";
import TextField from "@mui/material/TextField";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide} from "@mui/material";
import {FaTrash} from "react-icons/fa";
import {TransitionProps} from "@mui/material/transitions";
import {useDeleteEmployeeAction} from "../../../hooks/redux";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EmployeeDetail = () => {
  const deleteEmployeeAction = useDeleteEmployeeAction();
  const { pathname } = useLocation();
  const router = useHistory();
  const employeeId = pathname.split('/')[2];
  const [employee, setEmployee] = useState<EmployeeModel | undefined>();
  const [isDeleteModalOpened, setIsDeleteModalOpened] = useState(false);
  
  useEffect(() => {
    EmployeeService.fetchEmployee(employeeId).then((res) => {
      setEmployee(res);
    })
  }, []);
  
  const handleEmployeeData = (e: any) => {
    if (employee) {
      setEmployee({
        ...employee,
        [e.name]: e.value
      });
    }
  };
  
  const handleEmployeeUpdate = () => {

  };
  
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
      <h2 className="font-bold text-4xl">
        Employee Detail
      </h2>
      {
        employee &&
        <div className="space-y-4">
            <div className="mt-8">
                <Button
                    variant="contained"
                    color="warning"
                    startIcon={<FaTrash />}
                    onClick={handleDeleteModal}
                >
                    Delete Employee
                </Button>
            </div>
            <TextField
                autoFocus
                name="name"
                label="Employee Name"
                fullWidth
                variant="standard"
                value={employee?.name}
                onChange={(e) => handleEmployeeData(e.target)}
            />
            <div className="flex justify-around">
                <Button
                    onClick={handleEmployeeUpdate}
                    variant="contained"
                >
                    Update
                </Button>
                <Button
                    onClick={goBack}
                    variant="contained"
                >
                    Go Back
                </Button>
            </div>
        </div>
      }
      <Dialog
        open={isDeleteModalOpened}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDeleteModal}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          Are you sure want to delete this employee?
        </DialogTitle>
        <DialogActions>
          <Button variant="outlined" onClick={handleDeleteModal}>
            Cancel
          </Button>
          <Button variant="outlined" onClick={deleteEmployee}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EmployeeDetail;
