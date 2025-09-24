// src/app/dashboard/nodes/page.tsx
export default function NodesPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Farm Nodes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Node Card */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="font-semibold">Node A1</h3>
          <p>Status: Online</p>
          <p>Battery: 87%</p>
        </div>
      </div>
    </div>
  );
}
