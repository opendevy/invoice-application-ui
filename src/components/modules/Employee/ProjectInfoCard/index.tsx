import React, { FC } from "react";
import { ProjectModel } from "../../../../resources/models";
import { Link } from 'react-router-dom';

interface IProjectInfoCardProps {
  data: ProjectModel;
}

const ProjectInfoCard: FC<IProjectInfoCardProps> = ({ data }) => {
  return (
    <Link to={`/employee/projects/${data._id}`}>
      <div className="p-4 rounded-lg bg-gray-400 space-y-4">
        <h3>
          {data.name}
        </h3>
        <div>
          <span>Budget: {data.budget}</span>
        </div>
        <div>
          <span>Client: {data.client.name}</span>
        </div>
        <div>
          <span>Status: </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectInfoCard
