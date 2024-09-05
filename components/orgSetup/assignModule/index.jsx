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
import ModuleTable from "./ModuleTable";
import AssignModuleForm from "./AssignModuleForm";

const AssignModule = ({
  loading,
  settingList,
  assignModuleForm,
  handleSubmit,
  openDialouge,
  setOpenDialouge,
}) => {
  const moduleTypeListData = useSelector(
    (state) => state.assignModule.moduleTypeData
  ).map((item) => {
    return {
      id: `${item.Id}`,
      label: item.Module_Name,
    };
  });

  const orgListData = useSelector((state) => state.createOrg.orgData).map(
    (item) => {
      return {
        id: `${item.Id}`,
        label: item.Org_Name,
      };
    }
  );

  const orgModuleListData = useSelector(
    (state) => state.assignModule.orgModuleData
  ).map((item) => {
    return {
      id: item.Id,
      orgName: item.Org_Name,
      address: item.Org_Address,
      mobile: item.Org_Mobile,
    };
  });

  return (
    <div className="flex flex-col h-full ">
      <div className="w-full flex items-center justify-end pb-5">
        <Dialog open={openDialouge} onOpenChange={setOpenDialouge}>
          <DialogTrigger>
            <div
              className={`bg-green text-white font-normal px-5 py-3 rounded-md hover:bg-green/70`}
            >
              Assign Module
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Assign Module</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <div>
              <AssignModuleForm
                moduleList={moduleTypeListData}
                orgList={orgListData}
                loading={loading}
                settingList={settingList}
                form={assignModuleForm}
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
        <ModuleTable data={orgModuleListData} />
        {/* <div className="bg-blue-200 h-[1000px] w-full"></div> */}
      </ScrollArea>
    </div>
  );
};

export default AssignModule;
