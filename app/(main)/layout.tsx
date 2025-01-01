import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="hidden md:block h-full w-[300px]">
          <Sidebar />
        </div>
        {/* Content Area */}
        <div className="flex-1 p-5 overflow-auto">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
