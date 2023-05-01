import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import AddEmployeeModal from "../../components/modules/Manager/Employees/AddEmployeeModal";
import { useEmployeeState, useFetchEmployeesAction } from "../../hooks/redux";
import EmployeeItem from "../../components/modules/Manager/Employees/EmployeeItem";

const Employees = () => {
  const { employees } = useEmployeeState();
  const fetchEmployees = useFetchEmployeesAction();
  const [isAddModalOpened, setIsAddModalOpened] = useState(false);

  const handleAddModal = () => {
    setIsAddModalOpened(!isAddModalOpened);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <h2 className="font-bold text-4xl">
        Employees
      </h2>
      <div className="flex justify-end my-4">
        <Button
          variant="contained"
          onClick={handleAddModal}
        >
          + Add New Employee
        </Button>
      </div>
      <div className="grid grid-cols-5 gap-4 mt-6">
        {
          employees.map((employee) => (
            <EmployeeItem
              employeeData={employee}
              key={employee._id}
            />
          ))
        }
      </div>
      <AddEmployeeModal
        isOpened={isAddModalOpened}
        handleModal={handleAddModal}
      />
    </div>
  );
};

export default Employees;
