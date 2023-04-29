import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ProjectModel } from "../../../resources/models";
import * as ProjectService from "../../../services/project.service";
import { Button } from "@mui/material";
import ReservationModal from "../../../components/modules/Employee/ReservationModal";
import { FaTimes } from "react-icons/fa";
import { useHistory } from "react-router";

const EmployeeProjectDetail = () => {
  const { pathname } = useLocation();
  const router = useHistory();
  const projectId = pathname.split('/')[3];
  const [project, setProject] = useState<ProjectModel | undefined>();
  const [isReservationModalOpened, setIsReservationModalOpened] = useState(false);
  
  useEffect(() => {
    ProjectService.fetchProject(projectId).then((res) => {
      setProject(res);
    })
  }, []);
  
  const handleReservationModal = () => {
    setIsReservationModalOpened(!isReservationModalOpened);
  };
  
  const goBack = () => {
    router.push('/employee/projects')
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
        project &&
        <div className="space-y-6 my-4">
            <h2 className="font-bold text-xl">
                Project Name: {project.name}
            </h2>
            <h2 className="font-bold text-xl">
                Client: {project.client.name}
            </h2>
            <div>
                Budget: {project.budget}
            </div>
            <div className="flex justify-center">
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleReservationModal}
                >
                    Reservation this project
                </Button>
            </div>
        </div>
      }
      <ReservationModal
        isOpened={isReservationModalOpened}
        handleModal={handleReservationModal}
      />
    </div>
  );
};

export default EmployeeProjectDetail;
