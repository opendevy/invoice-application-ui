import React, { useState } from "react";
import * as ReservationService from "../services/reservation.service";
import * as ProjectService from "../services/project.service";
import {ProjectModel} from "../resources/models";

const AccountContext = React.createContext({} as any);

function AccountProvider(props: any) {
  const [reservedProjects, setReservedProjects] = useState<ProjectModel[]>();

  async function createReservation(project_id: string, hourlyRate: number) {
    return await ReservationService.createReservation(project_id, hourlyRate).then(res => res)
  }
  
  async function fetchReservedProjects(employee_id: string) {
    return await ProjectService.fetchReservedProjects(employee_id).then((res) => {
      setReservedProjects(res);
    })
  }

  return (
    <AccountContext.Provider
      value={{
        createReservation,
        fetchReservedProjects,
        reservedProjects
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
