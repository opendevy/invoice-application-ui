import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {ProjectModel, ReservationModel} from "../../../resources/models";
import * as ProjectService from "../../../services/project.service";
import { Button } from "@mui/material";
import ReservationModal from "../../../components/modules/Employee/ReservationModal";
import { FaTimes } from "react-icons/fa";
import { useHistory } from "react-router";
import {toast} from "react-toastify";

type ProjectDetail = {
  projectData: ProjectModel | undefined;
  reservation: ReservationModel | undefined;
}

const EmployeeProjectDetail = () => {
  const { pathname } = useLocation();
  const router = useHistory();
  const projectId = pathname.split('/')[3];
  const [project, setProject] = useState<ProjectDetail>();
  const [isReservationModalOpened, setIsReservationModalOpened] = useState(false);
  
  useEffect(() => {
    fetchProject();
  }, []);
  
  const fetchProject = () => {
    ProjectService.fetchProject(projectId).then((res) => {
      setProject(res);
    })
  };
  
  const handleReservationModal = () => {
    setIsReservationModalOpened(!isReservationModalOpened);
  };
  
  const goBack = () => {
    router.push('/employee/projects')
  };
  
  const handleStartWork = () => {
    if (project?.reservation?.status !== 'approved') {
      toast.warning('This reservation is not approved yet');
    } else {
    
    }
  };
  
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-4xl">
          Project Detail
        </h2>
        <FaTimes
          className="text-xl cursor-pointer"
          onClick={goBack}
        />
      </div>
      {
        project && project.projectData &&
          <div className="space-y-6 my-4">
            <h2 className="font-bold text-xl">
              Project Name: {project.projectData.name}
            </h2>
            <h2 className="font-bold text-xl">
              Client: {project.projectData.client.name}
            </h2>
            <div>
              Budget: {project.projectData.budget}
            </div>
            {
              project.reservation ? (
                <>
                  <div>
                    Status: {project.reservation.status}
                  </div>
                  <div className="flex justify-center">
                    <Button
                      variant="outlined"
                      color="info"
                      onClick={handleStartWork}
                    >
                      Start Work
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex justify-center">
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleReservationModal}
                  >
                    Reservation this project
                  </Button>
                </div>
              )
            }
            <ReservationModal
              isOpened={isReservationModalOpened}
              handleModal={handleReservationModal}
              projectData={project.projectData}
              fetchProject={fetchProject}
            />
        </div>
      }
    </div>
  );
};

export default EmployeeProjectDetail;
