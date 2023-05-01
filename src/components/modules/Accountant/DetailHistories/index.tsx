import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  SelectChangeEvent
} from "@mui/material";
import { useEmployeeState, useFetchEmployeesAction } from "../../../../hooks/redux";
import { ProjectModel } from "../../../../resources/models";
import * as ProjectService from '../../../../services/project.service';
import { useAccount } from "../../../../context/account.context";
import DetailLogModal from "./DetailLogModal";

const DetailHistories = () => {
  const { fetchReservedProjects, reservedProjects } = useAccount();
  const { employees } = useEmployeeState();
  const fetchEmployees = useFetchEmployeesAction();
  const [employee, setEmployee] = useState('');
  const [isDetailModalOpened, setIsDetailModalOpened] = useState(false);
  const [reservedProject, setReservedProject] = useState<ProjectModel>();
  
  const handleEmployeeChange = (event: SelectChangeEvent) => {
    setEmployee(event.target.value);
  };
  
  useEffect(() => {
    fetchEmployees();
  }, []);
  
  useEffect(() => {
    if (employee) {
      fetchReservedProjects(employee);
    }
  }, [employee]);
  
  const handleDetailModalOpen = () => {
    setIsDetailModalOpened(!isDetailModalOpened);
  };
  
  const handleDetailModal = (data: ProjectModel) => {
    setReservedProject(data);
    handleDetailModalOpen();
  };
  
  return (
    <div className="my-4">
      <div>
        <FormControl
          sx={{ my: 1, minWidth: 200 }}
          error={employee === ''}
        >
          <InputLabel id="demo-simple-select-error-label">
            Employee
          </InputLabel>
          <Select
            labelId="demo-simple-select-error-label"
            id="demo-simple-select-error"
            value={employee}
            label="Employee"
            onChange={handleEmployeeChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {
              employees.map((employee) => (
                <MenuItem
                  value={employee._id}
                  key={employee._id}
                >
                  {employee.name}
                </MenuItem>
              ))
            }
          </Select>
          {
            employee === '' &&
            <FormHelperText>Please select employee</FormHelperText>
          }
        </FormControl>
        {
          employee && (
            reservedProjects ? (
              <div>
                <table className="w-full">
                  <thead>
                    <tr className="border">
                      <th className="p-2">Project Name</th>
                      <th className="p-2">Client</th>
                      <th className="p-2">Budget</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    reservedProjects.map((reservedProject: ProjectModel) => (
                      <tr
                        key={reservedProject._id}
                        className="border cursor-pointer"
                        onClick={() => handleDetailModal(reservedProject)}
                      >
                        <td className="p-2 text-center">
                          {reservedProject.name}
                        </td>
                        <td className="p-2 text-center">
                          {reservedProject.client.name}
                        </td>
                        <td className="p-2 text-center">
                          {reservedProject.budget}
                        </td>
                      </tr>
                    ))
                  }
                  </tbody>
                </table>
              </div>
            ) : (
              <div>No Data...</div>
            )
          )
        }
      </div>
      {
        isDetailModalOpened && reservedProject && (
          <DetailLogModal
            isOpened={isDetailModalOpened}
            handleModal={handleDetailModalOpen}
            reservedProject={reservedProject}
          />
        )
      }
    </div>
  );
};

export default DetailHistories;
