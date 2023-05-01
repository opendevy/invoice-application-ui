import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import AddProjectModal from '../../components/modules/Manager/Projects/AddProjectModal';
import { useProjectState, useFetchProjectsAction } from '../../hooks/redux';
import ProjectCard from '../../components/modules/Manager/Projects/ProjectCard';

const ProjectPage = () => {
  const { projects } = useProjectState();
  const fetchProjects = useFetchProjectsAction();
  const [isAddModalOpened, setIsAddModalOpened] = useState(false);

  const handleAddModal = () => {
    setIsAddModalOpened(!isAddModalOpened);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <h2 className='font-bold text-4xl'>
        Projects
      </h2>
      <div className='flex justify-end'>
        <Button
          variant='contained'
          onClick={handleAddModal}
        >
          + Add New Project
        </Button>
      </div>
      <div className='grid grid-cols-4 gap-4 mt-8'>
        {
          projects.map((project) => (
            <ProjectCard
              key={project._id}
              projectData={project}
            />
          ))
        }
      </div>
      <AddProjectModal
        isOpened={isAddModalOpened}
        handleModal={handleAddModal}
      />
    </div>
  );
};

export default ProjectPage;
