import { ReactNode } from "react";
import SideNav from "../ui/dashboard/sidenav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "dashboard",
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:overflow-hidden md:flex-row">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:p-12 md:overflow-y-auto">{children}</div>
    </div>
  );
}
