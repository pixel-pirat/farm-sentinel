import { supabaseServer } from "@/lib/supabase/server";

export default async function AdminOverview() {
  const supabase = supabaseServer();

  const { count: userCount } = await supabase
    .from("users")
    .select("*", { count: "exact", head: true });

  const { count: farmCount } = await supabase
    .from("farms")
    .select("*", { count: "exact", head: true });

  const { count: logCount } = await supabase
    .from("system_logs")
    .select("*", { count: "exact", head: true });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-3xl font-bold">{userCount ?? 0}</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Total Farms</h3>
          <p className="text-3xl font-bold">{farmCount ?? 0}</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
          <h3 className="text-lg font-semibold">System Logs</h3>
          <p className="text-3xl font-bold">{logCount ?? 0}</p>
        </div>
      </div>
    </div>
  );
}
