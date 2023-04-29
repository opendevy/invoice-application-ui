import React from "react";
import {Button} from "@mui/material";

const Clients = () => {
  return (
    <div>
      <h2 className="font-bold text-4xl">
        Client
      </h2>
      <div className="flex justify-end">
        <Button variant="contained">
          + Add New Client
        </Button>
      </div>
    </div>
  );
};

export default Clients;
