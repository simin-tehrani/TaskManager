import React from "react";
import RightSidebar from "./Sidebar";

interface Ichildren {
  children: React.ReactNode;
}

function Layout({ children }: Ichildren) {
  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-gradient-to-r from-slate-300 to-slate-500 flex justify-center items-center">
        {children}
      </div>
      <div>
        <RightSidebar />
      </div>
    </div>
  );
}

export default Layout;
