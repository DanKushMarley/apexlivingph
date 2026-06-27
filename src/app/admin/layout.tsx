"use client";
<Link
  href="/admin/pipeline"
  className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100"
>
  📊 CRM Pipeline
</Link>
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  Home,
  Settings
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItem = (href: string) =>
    pathname === href
      ? "flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white"
      : "flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100";

  return (
    <div className="min-h-screen flex bg-gray-50">

      {/* SIDEBAR */}
      <aside className="w-72 bg-white border-r border-gray-100 p-6 flex flex-col justify-between">

  <div>
    {/* BRAND */}
    <div className="mb-10">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900">
        Apex Living
      </h1>
      <p className="text-xs text-gray-400 mt-1">
        Admin Dashboard
      </p>
    </div>

    {/* NAV */}
    <nav className="flex flex-col gap-2 text-sm">

      <Link href="/admin" className={navItem("/admin")}>
        Dashboard
      </Link>

      <Link href="/admin/inquiries" className={navItem("/admin/inquiries")}>
        Inquiries
      </Link>

      <Link href="/admin/pipeline" className={navItem("/admin/pipeline")}>
        Pipeline
      </Link>

    </nav>
  </div>

  {/* FOOTER */}
  <div className="text-xs text-gray-400">
    Apex Living PH v1.0
  </div>

</aside>
      {/* MAIN */}
      <main className="flex-1 p-10">
        {children}
      </main>

    </div>
  );
}