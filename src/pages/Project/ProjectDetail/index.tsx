import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router";
import {ProjectModel, ReservationModel} from "../../../resources/models";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import * as ProjectService from "../../../services/project.service";
import { FaPlus } from "react-icons/fa";
import AddEmployeeToProjectModal from "../../../components/modules/Manager/Projects/AddEmployeeToProjectModal";
import ReservedEmployeeItem from "../../../components/modules/Manager/Projects/ReservedEmployeeItem";

type ProjectDetail = {
  projectData: ProjectModel | undefined;
  reservations: ReservationModel[] | undefined;
}

const ProjectDetail = () => {
  const { pathname } = useLocation();
  const router = useHistory();
  const projectId = pathname.split('/')[2];
  const [project, setProject] = useState<ProjectDetail>();

  useEffect(() => {
    fetchProject();
  }, []);
  
  const fetchProject = () => {
    ProjectService.fetchProject(projectId).then((res) => {
      setProject(res);
    });
  };

  const handleProjectData = (e: any) => {
    if (project) {
      setProject({
        ...project,
        [e.name]: e.value
      });
    }
  };
  
  // const handleAddEmployeeModal = () => {
  //   setIsAddEmployeeModalOpened(!isAddEmployeeModalOpened);
  // };

  const handleProjectUpdate = () => {

  };

  const goBack = () => {
    router.push('/projects');
  };

  return (
    <div>
      <h2 className="font-bold text-4xl">
        Project Detail
      </h2>
      {
        project &&
          <div className="space-y-6 my-4">
            <h2 className="font-bold text-xl">
              Client: {project.projectData?.client.name}
            </h2>
            <TextField
              autoFocus
              name="budget"
              label="Budget"
              type="number"
              fullWidth
              variant="standard"
              value={project?.projectData?.budget}
              onChange={(e) => handleProjectData(e.target)}
            />
            <TextField
              autoFocus
              name="name"
              label="Project Name"
              fullWidth
              variant="standard"
              value={project?.projectData?.name}
              onChange={(e) => handleProjectData(e.target)}
            />
            <div>
              <h4 className="text-xl font-bold">
                Reserved Employees
              </h4>
              <div className="my-4">
                <table className="w-full">
                  <thead>
                    <tr>
                      <td>
                        Name
                      </td>
                      <td>
                        Rate
                      </td>
                      <td>
                        Status
                      </td>
                      <td>
                        Approve/Disapprove
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      project.projectData?.employees.map((employee) => (
                        <ReservedEmployeeItem
                          key={employee._id}
                          employee={employee}
                          reservations={project?.reservations}
                        />
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex justify-around">
              <Button
                onClick={handleProjectUpdate}
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
      {/*<AddEmployeeToProjectModal*/}
      {/*  isOpened={isAddEmployeeModalOpened}*/}
      {/*  handleModal={handleAddEmployeeModal}*/}
      {/*/>*/}
    </div>
  );
};

export default ProjectDetail;
