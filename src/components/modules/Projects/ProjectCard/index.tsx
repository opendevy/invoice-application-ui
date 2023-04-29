import React, { FC } from "react";
import { ProjectModel } from "../../../../resources/models";
import { Link } from "react-router-dom";

interface IProjectCard {
  projectData: ProjectModel;
}

const ProjectCard: FC<IProjectCard> = ({ projectData }) => {
  return (
    <Link to={`/projects/${projectData._id}`}>
      <div className="p-4 rounded-lg bg-gray-400">
        <h3 className="text-center font-bold">
          {projectData.name}
        </h3>
        <div className="mt-4">
          <span>Budget: {projectData.budget}</span>
        </div>
        <div className="mt-4">
          <span>Client: {projectData.client.name}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
