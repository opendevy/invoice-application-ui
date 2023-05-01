import React, {FC, useEffect, useState} from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { ProjectModel } from "../../../../../resources/models";
import { useAccount } from "../../../../../context/account.context";

interface IDetailLogModalProps {
  isOpened: boolean;
  handleModal: () => void;
  reservedProject: ProjectModel;
  employee: string
}

const DetailLogModal: FC<IDetailLogModalProps> = ({
  isOpened,
  handleModal,
  reservedProject,
  employee
}) => {
  const { fetchProjectWorkHistory } = useAccount();
  const [log, setLog] = useState<any>();
  
  const handleClose = () => {
    handleModal();
  };
  
  useEffect(() => {
    fetchProjectWorkHistory(employee, reservedProject._id).then((res: any) => {
      setLog(res);
    });
  }, []);
  
  return (
    <div>
      <Dialog
        open={isOpened}
        onClose={handleClose}
        maxWidth="lg"
      >
        <DialogTitle
          sx={{
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          Detail Log
        </DialogTitle>
        <DialogContent
          sx={{
            width: 400,
          }}
        >
          <div className="space-y-2">
            <div>
              <b>Project Name:</b> {reservedProject.name}
            </div>
            <div>
              <b>Client Name:</b> {reservedProject.client.name}
            </div>
            <div>
              <b>Budget:</b> {reservedProject.budget}
            </div>
            <div>
              <b>Working Hours:</b> {log?.totalHours.toFixed(3)} (hrs)
            </div>
            <div>
              <b>Total Price:</b> {log?.totalPrice.toFixed(3)}
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DetailLogModal
