import { supabaseServer } from "@/lib/supabase/server";

export default async function UsersPage() {
  const supabase = supabaseServer();
  const { data: users } = await supabase.from("users").select("id, name, email, role");

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Manage Users</h2>
      <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-xl shadow">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Role</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id} className="border-t border-gray-200 dark:border-gray-700">
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
