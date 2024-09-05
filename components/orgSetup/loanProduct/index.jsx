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
import { useForm } from "react-hook-form";
import LoanProductForm from "./LoanProductForm";
import LoanProductTable from "./LoanProductTable";

const LoanProduct = ({
  loading,
  loanProductForm,
  handleSubmit,
  openDialouge,
  setOpenDialouge,
}) => {
  const loanProductData = useSelector(
    (state) => state.loanProduct.loanProductData
  ).map((item) => ({
    productName: item.Product_Name,
    productType: item.Product_Type,
  }));

  const loanProductTypeData = useSelector(
    (state) => state.loanProduct.loanProductTypeData
  ).map((item) => ({
    value: `${item.Id}`,
    label: item.Option_Value,
  }));

  const principalGlCrData = useSelector(
    (state) => state.loanProduct.principalGlCrData
  ).map((item) => ({
    value: `${item.Id}`,
    label: item.Ledger_Name,
  }));

  const principalGlOdData = useSelector(
    (state) => state.loanProduct.principalGlOdData
  ).map((item) => ({
    value: `${item.Id}`,
    label: item.Ledger_Name,
  }));

  const interestGlCrData = useSelector(
    (state) => state.loanProduct.inttGlCrData
  ).map((item) => ({
    value: `${item.Id}`,
    label: item.Ledger_Name,
  }));

  const interestGlOdData = useSelector(
    (state) => state.loanProduct.inttGlOdData
  ).map((item) => ({
    value: `${item.Id}`,
    label: item.Ledger_Name,
  }));

  const provissionGlCrData = useSelector(
    (state) => state.loanProduct.provissionGlCrData
  ).map((item) => ({
    value: `${item.Id}`,
    label: item.Ledger_Name,
  }));

  const provissionGlOdData = useSelector(
    (state) => state.loanProduct.provissionGlOdData
  ).map((item) => ({
    value: `${item.Id}`,
    label: item.Ledger_Name,
  }));

  return (
    <div className="flex flex-col h-full ">
      <div className="w-full flex items-center justify-end pb-5">
        <Dialog open={openDialouge} onOpenChange={setOpenDialouge}>
          <DialogTrigger>
            <div
              className={`bg-green text-white font-normal px-5 py-3 rounded-md hover:bg-green/70`}
            >
              Add Loan Product
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Loan Product</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <div>
              <LoanProductForm
                loading={loading}
                form={loanProductForm}
                handleSubmit={handleSubmit}
                loanProductTypeData={loanProductTypeData}
                principalGlCrData={principalGlCrData}
                principalGlOdData={principalGlOdData}
                interestGlCrData={interestGlCrData}
                interestGlOdData={interestGlOdData}
                provissionGlCrData={provissionGlCrData}
                provissionGlOdData={provissionGlOdData}
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* <div className="h-[100vh] bg-green/60 w-full">
        <div className="h-[500px] w-full bg-white"></div>
      </div> */}

      <ScrollArea className=" w-full bg-white rounded-lg px-5  h-full">
        <LoanProductTable data={loanProductData} />
        {/* <div className="bg-blue-200 h-[1000px] w-full"></div> */}
      </ScrollArea>
    </div>
  );
};
export default LoanProduct;
