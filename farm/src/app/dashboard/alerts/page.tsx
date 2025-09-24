// src/app/dashboard/alerts/page.tsx
export default function AlertsPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Alerts</h2>
      <div className="space-y-4">
        {/* Example Alert */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <p className="font-semibold">High Severity Pest Detected</p>
          <p className="text-sm text-gray-500">Node A1 · Sept 20, 2025</p>
        </div>
      </div>
    </div>
  );
}
