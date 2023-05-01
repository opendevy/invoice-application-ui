import React, { useEffect } from 'react';
import { useFetchProjectsAction, useProjectState } from '../../../hooks/redux';
import ProjectInfoCard from '../../../components/modules/Employee/ProjectInfoCard';

const EmployeeProjects = () => {
  const { projects } = useProjectState();
  const fetchProjects = useFetchProjectsAction();
  
  useEffect(() => {
    fetchProjects();
  }, []);
  
  return (
    <div>
      <h2 className='font-bold text-4xl'>
        Projects
      </h2>
      <div className='grid grid-cols-4 gap-4 mt-8'>
        {
          projects.map((project) => (
            <ProjectInfoCard
              key={project._id}
              data={project}
            />
          ))
        }
      </div>
    </div>
  );
};

export default EmployeeProjects;
