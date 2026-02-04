import React from "react";
import AdminHeader from "./Header/AdminHeader";
import AdminSidebar from "./Sidebar/AdminSidebar";
import AdminFooter from "./Footer/AdminFooter";
import { Outlet } from "react-router-dom";

const AdminLayout = ({ role = "Super Admin", adminName = "Admin" }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <AdminHeader role={role} adminName={adminName} />

        {/* This is where the page content will be rendered */}
        <main className="p-6 space-y-10 flex-1">
          <Outlet />
        </main>

        <AdminFooter />
      </div>
    </div>
  );
};

export default AdminLayout;
