import React, { FC, useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button } from '@mui/material';
import { ClientModel } from '../../../../../resources/models';
import { FaChevronDown, FaPen } from 'react-icons/fa';
import UpdateClientModal from '../UpdateClientModal';

interface IClientItemProps {
  clientData: ClientModel;
}

const ClientItem: FC<IClientItemProps> = ({ clientData }) => {
  const [isEditModalOpened, setIsEditModalOpened] = useState(false);

  const handleEditClientModal = () => {
    setIsEditModalOpened(!isEditModalOpened);
  }

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
          <Typography>
            Project Data
          </Typography>
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
