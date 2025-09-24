import { supabaseServer } from "@/lib/supabase/server";

export default async function LogsPage() {
  const supabase = supabaseServer();
  const { data: logs } = await supabase
    .from("system_logs")
    .select("id, action, created_at, user_id")
    .order("created_at", { ascending: false })
    .limit(50);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">System Logs</h2>
      <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-xl shadow">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="p-3 text-left">Action</th>
            <th className="p-3 text-left">User</th>
            <th className="p-3 text-left">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {logs?.map((log) => (
            <tr key={log.id} className="border-t border-gray-200 dark:border-gray-700">
              <td className="p-3">{log.action}</td>
              <td className="p-3">{log.user_id}</td>
              <td className="p-3">{new Date(log.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
