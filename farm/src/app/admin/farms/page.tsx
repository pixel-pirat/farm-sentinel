    import { supabaseServer } from "@/lib/supabase/server";

    export default async function FarmsPage() {
    const supabase = supabaseServer();
    const { data: farms } = await supabase.from("farms").select("id, name, location, owner_id");

    return (
        <div>
        <h2 className="text-2xl font-bold mb-6">Manage Farms</h2>
        <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-xl shadow">
            <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Location</th>
                <th className="p-3 text-left">Owner</th>
            </tr>
            </thead>
            <tbody>
            {farms?.map((farm) => (
                <tr key={farm.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="p-3">{farm.name}</td>
                <td className="p-3">{farm.location}</td>
                <td className="p-3">{farm.owner_id}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    }
