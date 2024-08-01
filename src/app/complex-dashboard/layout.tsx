import RevenueMatrics from "./@revenue/page";
import UserMetrics from "./@users/page";

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <UserMetrics />
      <div className="grid grid-cols-2">
        <RevenueMatrics />
        <UserMetrics />
      </div>
    </>
  );
}
