import React, {FC, useState} from "react";
import {ReservationModel, UserModel} from "../../../../../resources/models";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

interface IReservedEmployeeItem {
  employee: UserModel;
  reservations: ReservationModel[] | undefined;
}

const ReservedEmployeeItem: FC<IReservedEmployeeItem> = ({
  employee,
  reservations
}) => {
  const ownReservation = reservations?.find((reservation) => reservation.employee._id === employee._id)
  
  const handleChange = () => {
  
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
          color="secondary"
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </td>
    </tr>
  );
};

export default ReservedEmployeeItem;
