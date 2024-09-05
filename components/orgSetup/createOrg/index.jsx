import { useSelector } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import AddOrgForm from "./AddOrgForm";
import OrgTable from "./OrgTable";

const CreateOrg = ({
  loading,
  addOrgForm,
  handleSubmit,
  openDialouge,
  setOpenDialouge,
}) => {
  const orgTypeData = useSelector((state) => state.createOrg.orgTypeData).map(
    (item) => {
      return {
        value: `${item.Id}`,
        label: item.Type_Name,
      };
    }
  );

  const orgListData = useSelector((state) => state.createOrg.orgData).map(
    (item) => {
      return {
        id: item.Id,
        orgName: item.Org_Name,
        address: item.Org_Address,
        contact: item.Org_Mobile,
        type: item.Type_Name,
      };
    }
  );

  return (
    <div className="flex flex-col  h-full">
      <div className="w-full flex items-center justify-end pb-5">
        <Dialog open={openDialouge} onOpenChange={setOpenDialouge}>
          <DialogTrigger>
            <div
              className={`bg-green text-white font-normal px-5 py-3 rounded-md hover:bg-green/70`}
            >
              Add Organisation
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Organisation</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <div>
              <AddOrgForm
                orgTypeData={orgTypeData}
                loading={loading}
                form={addOrgForm}
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
        <OrgTable data={orgListData} />
      </ScrollArea>
    </div>
  );
};

export default CreateOrg;
