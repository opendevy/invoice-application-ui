import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import AddClientModal from '../../components/modules/Manager/Clients/AddClientModal';
import { useClientState, useFetchClientsAction } from '../../hooks/redux';
import ClientItem from '../../components/modules/Manager/Clients/ClientItem';

const Clients = () => {
  const { clients } = useClientState();
  const fetchClients = useFetchClientsAction();
  const [isAddModalOpened, setIsAddModalOpened] = useState(false);

  const handleAddModal = () => {
    setIsAddModalOpened(!isAddModalOpened);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div>
      <h2 className='font-bold text-4xl'>
        Client
      </h2>
      <div className='flex justify-end'>
        <Button
          variant='contained'
          onClick={handleAddModal}
        >
          + Add New Client
        </Button>
      </div>
      <div className='mt-8 space-y-4'>
        {
          clients.map((client) => (
            <ClientItem
              key={client._id}
              clientData={client}
            />
          ))
        }
      </div>
      <AddClientModal
        isOpened={isAddModalOpened}
        handleModal={handleAddModal}
      />
    </div>
  );
};

export default Clients;
