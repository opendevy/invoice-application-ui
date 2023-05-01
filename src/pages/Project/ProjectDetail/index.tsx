import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router";
import { ProjectModel } from "../../../resources/models";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import * as ProjectService from "../../../services/project.service";
import { FaPlus } from "react-icons/fa";
import AddEmployeeToProjectModal from "../../../components/modules/Manager/Projects/AddEmployeeToProjectModal";

const ProjectDetail = () => {
  const { pathname } = useLocation();
  const router = useHistory();
  const projectId = pathname.split('/')[2];
  const [project, setProject] = useState<ProjectModel | undefined>();
  const [isAddEmployeeModalOpened, setIsAddEmployeeModalOpened] = useState(false);

  useEffect(() => {
    ProjectService.fetchProject(projectId).then((res) => {
      setProject(res);
    });
  }, []);

  const handleProjectData = (e: any) => {
    if (project) {
      setProject({
        ...project,
        [e.name]: e.value
      });
    }
  };
  
  const handleAddEmployeeModal = () => {
    setIsAddEmployeeModalOpened(!isAddEmployeeModalOpened);
  };

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
              Client: {project.client.name}
            </h2>
            <TextField
              autoFocus
              name="budget"
              label="Budget"
              type="number"
              fullWidth
              variant="standard"
              value={project?.budget}
              onChange={(e) => handleProjectData(e.target)}
            />
            <TextField
              autoFocus
              name="name"
              label="Project Name"
              fullWidth
              variant="standard"
              value={project?.name}
              onChange={(e) => handleProjectData(e.target)}
            />
            <div>
              <h4 className="text-xl font-bold">
                Employees
              </h4>
              <div className="my-4">
                <Button
                  onClick={handleAddEmployeeModal}
                  variant="contained"
                  startIcon={<FaPlus />}
                >
                  Add Employee
                </Button>
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
      <AddEmployeeToProjectModal
        isOpened={isAddEmployeeModalOpened}
        handleModal={handleAddEmployeeModal}
      />
    </div>
  );
};

export default ProjectDetail;
