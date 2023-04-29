import React, {useEffect, useState} from "react";
import { useLocation, useHistory } from "react-router";
import {useFetchProjectsAction, useProjectState} from "../../../hooks/redux";
import {ProjectModel} from "../../../resources/models";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";

const ProjectDetail = () => {
  const { projects } = useProjectState();
  const { pathname } = useLocation();
  const router = useHistory();
  const fetchProjects = useFetchProjectsAction();
  const projectId = pathname.split('/')[2];
  const [project, setProject] = useState<ProjectModel | undefined>();

  useEffect(() => {
    // fetchProjects(projectId);
    setProject(projects.find((item) => item._id = projectId));
  }, []);

  const handleProjectData = (e: any) => {
    if (project) {
      setProject({
        ...project,
        [e.name]: e.value
      });
    }
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
    </div>
  );
};

export default ProjectDetail;
