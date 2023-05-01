import React, { FC, useState, useEffect } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button
} from '@mui/material';
import { ClientModel, ProjectModel } from '../../../../../resources/models';
import { FaChevronDown, FaPen } from 'react-icons/fa';
import UpdateClientModal from '../UpdateClientModal';
import * as ProjectService from '../../../../../services/project.service';

interface IClientItemProps {
  clientData: ClientModel;
}

const ClientItem: FC<IClientItemProps> = ({ clientData }) => {
  const [isEditModalOpened, setIsEditModalOpened] = useState(false);
  const [projects, setProjects] = useState<ProjectModel[]>([]);

  const handleEditClientModal = () => {
    setIsEditModalOpened(!isEditModalOpened);
  };

  useEffect(() => {
    ProjectService.fetchProjects({ client: clientData._id }).then((res) => {
      setProjects(res);
    })
  }, []);

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<FaChevronDown />}
        >
          <Typography>{clientData.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='mb-4'>
            <Button
              variant='contained'
              startIcon={<FaPen />}
              onClick={handleEditClientModal}
            >
              Edit Client
            </Button>
          </div>
          <Typography align='center' fontWeight='bold'>
            Project Data
          </Typography>
          <table className="w-full mt-2">
            <thead>
              <tr className="border">
                <th className="p-2">Project Name</th>
                <th className="p-2">Budget</th>
              </tr>
            </thead>
            <tbody>
              {
                projects.map((project) => (
                  <tr
                    key={project._id}
                    className='border cursor-pointer'
                  >
                    <td className='p-2 text-center'>
                      {project.name}
                    </td>
                    <td className='p-2 text-center'>
                      {project.budget}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          {
            projects.length === 0 &&
            <div className="flex justify-center font-bold py-4">
              No Data...
            </div>
          }
        </AccordionDetails>
      </Accordion>
      <UpdateClientModal
        isOpened={isEditModalOpened}
        handleModal={handleEditClientModal}
        client={clientData}
      />
    </div>
  );
};

export default ClientItem;
