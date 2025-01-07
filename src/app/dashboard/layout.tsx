import Chatbox from "@/components/chatbox";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex-1 flex gap-4 px-4">
      <div className="flex-[4] py-4">{children}</div>
      <div className="flex-[2] py-4">
        <Chatbox />
      </div>
    </div>
  );
};
export default DashboardLayout;
