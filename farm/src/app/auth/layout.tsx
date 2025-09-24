// app/layout.tsx
import type { Metadata } from "next";
import "@/app/globals.css";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "Farm Sentinel",
  description: "AI-powered IoT crop protection system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
