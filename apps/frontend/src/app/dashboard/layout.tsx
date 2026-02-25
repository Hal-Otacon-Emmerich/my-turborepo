import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Finance dashboard to contreol your finances",
};

export default function DashboardLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
      <div className="dashboard flex flex-row bg-gradient-to-br from-zinc-900 via-violet-900 to-rose-900">
          <Navbar />
          <main className="p-4 dasboard-container basis-9/10">
            {children}
          </main>
      </div>
  );
}
