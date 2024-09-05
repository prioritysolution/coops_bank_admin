"use client";
import { useSelector } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import AccountLedgerForm from "./AccountLedgerForm";
import AccountLedgerTable from "./AccountLedgerTable";

const AccountLedger = ({
  loading,
  addAccountLedgerForm,
  handleSubmit,
  openDialouge,
  setOpenDialouge,
}) => {
  const accountSubHeadData = useSelector(
    (state) => state.accountHead.accountSubHeadData
  ).map((item) => {
    return {
      id: `${item.Id}`,
      label: item.Sub_Head_Name,
    };
  });

  const accountLedgerTableData = useSelector(
    (state) => state.accountLedger.accountLedgerData
  ).map((item) => ({
    ledgerName: item.Ledger_Name,
    subHeadName: item.Sub_Head_Name,
  }));

  return (
    <div className="flex flex-col h-full ">
      <div className="w-full flex items-center justify-end pb-5">
        <Dialog open={openDialouge} onOpenChange={setOpenDialouge}>
          <DialogTrigger>
            <div
              className={`bg-green text-white font-normal px-5 py-3 rounded-md hover:bg-green/70`}
            >
              Add Account Ledger
            </div>
          </DialogTrigger>
          <DialogContent className="p-10 gap-10 flex flex-col justify-between">
            <DialogHeader>
              <DialogTitle>Add Account Ledger</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <div>
              <AccountLedgerForm
                subHeadList={accountSubHeadData}
                loading={loading}
                form={addAccountLedgerForm}
                handleSubmit={handleSubmit}
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* <div className="h-[100vh] bg-green/60 w-full">
            <div className="h-[500px] w-full bg-white"></div>
          </div> */}

      <ScrollArea className=" w-full bg-white rounded-lg px-5  h-full">
        <AccountLedgerTable data={accountLedgerTableData} />
      </ScrollArea>
    </div>
  );
};

export default AccountLedger;
