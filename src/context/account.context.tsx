import React, { useState } from "react";
import * as ReservationService from "../services/reservation.service";

const AccountContext = React.createContext({} as any);

function AccountProvider(props: any) {
  // const [rooms, setRooms] = useState<any[]>();
  // const [reservations, setReservations] = useState<any[]>();
  // const [selectedRoomData, setSelectedRoomData] = useState<any>({});

  async function createReservation(project_id: string, hourlyRate: number) {
    return await ReservationService.createReservation(project_id, hourlyRate).then(res => res)
  }
  
  // async function createRoom(price: string, type: string, file: any) {
  //   return await RoomService.create(type, price, file).then((res) => res);
  // }
  //
  // async function fetchRooms(query: any = {}) {
  //   return await RoomService.fetchRooms(query).then((res) => {
  //     setRooms(res);
  //   });
  // }
  //
  // async function updateRoom(log_id: string, price: number, activity: boolean) {
  //   return await RoomService.updateRoom(log_id, price, activity).then((res) => {
  //     fetchRooms();
  //   })
  // }
  //
  // async function deleteRoom(roomId: string) {
  //   return await RoomService.deleteRoom(roomId).then((res) => res);
  // }
  //
  // async function handleSelectedRoomData(roomData: any) {
  //   setSelectedRoomData(roomData);
  // }
  //
  // async function createReservation() {
  //   return await ReservationService.create(selectedRoomData._id, selectedRoomData.startDate, selectedRoomData.endDate)
  //     .then((res) => res);
  // }
  //
  // async function fetchReservations(query: any = {}) {
  //   return await ReservationService.fetchReservations(query).then((res) => {
  //     setReservations(res);
  //   });
  // }
  //
  // async function updateReservation(log_id: string, activity: boolean) {
  //   return await ReservationService.updateReservation(log_id, activity).then((res) => {
  //     fetchReservations();
  //   })
  // }

  return (
    <AccountContext.Provider
      value={{
        createReservation
        // createRoom,
        // fetchRooms,
        // updateRoom,
        // rooms,
        // reservations,
        // deleteRoom,
        // selectedRoomData,
        // handleSelectedRoomData,
        // createReservation,
        // fetchReservations,
        // updateReservation,
        // confirmModal,
        // setConfirmModal
      }}
      {...props}
    />
  );
}

function useAccount() {
  const context = React.useContext(AccountContext);
  if (context === undefined) {
    throw new Error("useAccount must be used within a AccountProvider");
  }
  return context;
}

export { AccountProvider, useAccount };
