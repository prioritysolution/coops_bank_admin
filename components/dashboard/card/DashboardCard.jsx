const DashboardCard = ({ label, count }) => {
  return (
    <div className="w-[200px] lg:w-[300px] h-[150px] bg-[#FFFFFF] border border-[#E7E8F2] rounded-md px-3 py-5 flex flex-col justify-between">
      <p className="text-lg capitalize">{label}</p>
      <p className="text-2xl font-[500]">{count}</p>
    </div>
  );
};

export default DashboardCard;
