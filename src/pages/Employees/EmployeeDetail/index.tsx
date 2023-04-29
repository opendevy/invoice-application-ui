import React, {useEffect, useState} from "react";
import * as EmployeeService from "../../../services/employee.service";
import {EmployeeModel} from "../../../resources/models";
import {useLocation} from "react-router-dom";
import {useHistory} from "react-router";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";

const EmployeeDetail = () => {
  const { pathname } = useLocation();
  const router = useHistory();
  const employeeId = pathname.split('/')[2];
  const [employee, setEmployee] = useState<EmployeeModel | undefined>();
  
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
  
  return (
    <div>
      <h2 className="font-bold text-4xl">
        Employee Detail
      </h2>
      {
        employee &&
        <div className="space-y-4">
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
    </div>
  );
};

export default EmployeeDetail;
