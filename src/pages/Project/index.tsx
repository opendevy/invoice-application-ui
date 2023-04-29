import React, {useEffect, useState} from "react";
import {Button} from "@mui/material";
import AddProjectModal from "../../components/modules/Projects/AddProjectModal";
import {useClientState, useFetchClientsAction} from "../../hooks/redux";

const ProjectPage = () => {
  const [isAddModalOpened, setIsAddModalOpened] = useState(false);

  const handleAddModal = () => {
    setIsAddModalOpened(!isAddModalOpened);
  };

  return (
    <div>
      <h2 className="font-bold text-4xl">
        Projects
      </h2>
      <div className="flex justify-end">
        <Button
          variant="contained"
          onClick={handleAddModal}
        >
          + Add New Project
        </Button>
      </div>
      <AddProjectModal
        isOpened={isAddModalOpened}
        handleModal={handleAddModal}
      />
    </div>
  );
};

export default ProjectPage;
