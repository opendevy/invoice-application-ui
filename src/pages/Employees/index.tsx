import React, {useState} from "react";
import {Button} from "@mui/material";
import AddEmployeeModal from "../../components/modules/Employees/AddEmployeeModal";

const Employees = () => {
  const [isAddModalOpened, setIsAddModalOpened] = useState(false);

  const handleAddModal = () => {
    setIsAddModalOpened(!isAddModalOpened);
  };

  return (
    <div>
      <h2 className="font-bold text-4xl">
        Employees
      </h2>
      <div className="flex justify-end">
        <Button
          variant="contained"
          onClick={handleAddModal}
        >
          + Add New Employee
        </Button>
      </div>
      <AddEmployeeModal
        isOpened={isAddModalOpened}
        handleModal={handleAddModal}
      />
    </div>
  );
};

export default Employees;
