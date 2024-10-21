import Dashboard from "@/components/dashboard/dashboard";

/**
 * Home component for the application.
 *
 * This component renders the `Dashboard` component wrapped in a styled
 * `div` with a gradient background. It serves as the main landing page
 * of the application.
 *
 * @returns {JSX.Element} The home page with a dashboard.
 */
export default function Home(): JSX.Element {
  return (
    <div className="pb-6 bg-gradient-to-br from-gray-900 to-gray-800">
      <main className="items-center">
        <Dashboard />
      </main>
    </div>
  );
}
