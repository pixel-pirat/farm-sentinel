// src/app/admin/layout.tsx
import { ReactNode } from "react";
import Link from "next/link";

const navItems = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/farms", label: "Farms" },
  { href: "/admin/logs", label: "System Logs" },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="p-4 text-xl font-bold">Farm Sentinel Admin</div>
        <nav className="space-y-2 mt-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-lg font-semibold">Admin Dashboard</h1>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg">
            Logout
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
