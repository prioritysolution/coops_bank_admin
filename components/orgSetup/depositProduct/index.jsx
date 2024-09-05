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
import DepositProductForm from "./DepositProductForm";
import DepositProductTable from "./DepositProductTable";

const DepositProduct = ({
  loading,
  depositProductForm,
  handleSubmit,
  openDialouge,
  setOpenDialouge,
}) => {
  const depositProductTypeData = useSelector(
    (state) => state.depositProduct.depositProductTypeData
  ).map((item) => ({
    value: `${item.Id}`,
    label: item.Option_Value,
  }));

  const depositTypeData = useSelector(
    (state) => state.depositProduct.depositTypeData
  ).map((item) => ({
    value: `${item.Id}`,
    label: item.Option_Value,
  }));

  const principalGlData = useSelector(
    (state) => state.depositProduct.principalGlData
  ).map((item) => ({
    value: `${item.Id}`,
    label: item.Ledger_Name,
  }));

  const inttGlData = useSelector(
    (state) => state.depositProduct.inttGlData
  ).map((item) => ({
    value: `${item.Id}`,
    label: item.Ledger_Name,
  }));

  const provissionGlData = useSelector(
    (state) => state.depositProduct.provissionGlData
  ).map((item) => ({
    value: `${item.Id}`,
    label: item.Ledger_Name,
  }));

  const depositProductData = useSelector(
    (state) => state.depositProduct.depositProductData
  ).map((item) => ({
    productName: item.Product_Name,
    productType: item.Product_Type,
    depositType: item.Deposit_Type,
  }));

  return (
    <div className="flex flex-col h-full ">
      <div className="w-full flex items-center justify-end pb-5">
        <Dialog open={openDialouge} onOpenChange={setOpenDialouge}>
          <DialogTrigger>
            <div
              className={`bg-green text-white font-normal px-5 py-3 rounded-md hover:bg-green/70`}
            >
              Add Product
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Deposit Product</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <div>
              <DepositProductForm
                depositProductTypeData={depositProductTypeData}
                depositTypeData={depositTypeData}
                principalGlData={principalGlData}
                inttGlData={inttGlData}
                provissionGlData={provissionGlData}
                loading={loading}
                form={depositProductForm}
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
        <DepositProductTable data={depositProductData} />
        {/* <div className="bg-blue-200 h-[1000px] w-full"></div> */}
      </ScrollArea>
    </div>
  );
};
export default DepositProduct;
