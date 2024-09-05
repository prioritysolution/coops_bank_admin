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
import AccountSubHeadForm from "./AccountSubHeadForm";
import AccountSubHeadTable from "./AccountSubHeadTable";

const AccountSubHead = ({
  loading,
  addAccountSubHeadForm,
  handleSubmit,
  openDialouge,
  setOpenDialouge,
}) => {
  const accountHeadData = useSelector(
    (state) => state.accountHead.accountHeadData
  ).map((item) => {
    return {
      id: `${item.Id}`,
      label: item.Head_Name,
    };
  });

  const accountSubHeadTableData = useSelector(
    (state) => state.accountHead.accountSubHeadData
  ).map((item) => ({
    subHeadName: item.Sub_Head_Name,
    headName: item.Head_Name,
  }));

  return (
    <div className="flex flex-col h-full ">
      <div className="w-full flex items-center justify-end pb-5">
        <Dialog open={openDialouge} onOpenChange={setOpenDialouge}>
          <DialogTrigger>
            <div
              className={`bg-green text-white font-normal px-5 py-3 rounded-md hover:bg-green/70`}
            >
              Add Account Sub Head
            </div>
          </DialogTrigger>
          <DialogContent className="p-10 gap-10 flex flex-col justify-between">
            <DialogHeader>
              <DialogTitle>Add Account Sub Head</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <div className="">
              <AccountSubHeadForm
                headList={accountHeadData}
                loading={loading}
                form={addAccountSubHeadForm}
                handleSubmit={handleSubmit}
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <ScrollArea className=" w-full bg-white rounded-lg px-5  h-full">
        <AccountSubHeadTable data={accountSubHeadTableData} />
        {/* <div className="bg-blue-200 h-[1000px] w-full"></div> */}
      </ScrollArea>
    </div>
  );
};

export default AccountSubHead;
