// src/app/dashboard/page.tsx
export default function DashboardOverview() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Farm Overview</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Node Status */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Node Health</h3>
          <p className="text-gray-600 dark:text-gray-400">Battery & Status overview here</p>
        </div>

        {/* Daily Briefing */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Daily Briefing</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Weather, predicted pest activity, and farm insights.
          </p>
        </div>
      </div>
    </div>
  );
}
