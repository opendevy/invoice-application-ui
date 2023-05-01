import React, { FC } from 'react';
import { ReservationModel, UserModel } from '../../../../../resources/models';
import Switch from '@mui/material/Switch';
import * as ReservationService from '../../../../../services/reservation.service';
import { toast } from 'react-toastify';

interface IReservedEmployeeItem {
  employee: UserModel;
  reservations: ReservationModel[] | undefined;
  fetchProject: () => void;
}

const ReservedEmployeeItem: FC<IReservedEmployeeItem> = ({
  employee,
  reservations,
  fetchProject
}) => {
  const ownReservation = reservations?.find((reservation) => reservation.employee._id === employee._id)
  
  const handleChange = () => {
    if (ownReservation) {
      const status = ownReservation.status === 'approved' ? 'disapproved' : 'approved';
      ReservationService.manageReservation(ownReservation._id, status).then(() => {
        toast.success('Changed!')
        fetchProject();
      });
    }
  };
  
  return (
    <tr>
      <td>
        {employee.name}
      </td>
      <td>
        {ownReservation?.rate}
      </td>
      <td>
        {ownReservation?.status}
      </td>
      <td>
        <Switch
          checked={ownReservation?.status === 'approved'}
          onChange={handleChange}
          color='secondary'
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </td>
    </tr>
  );
};

export default ReservedEmployeeItem;
