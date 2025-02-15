const roleColors: { [key: string]: string } = {
  admin: "bg-red-500",
  moderator: "bg-orange-500",
  user: "bg-green-500",
  support: "bg-blue-500",
  employee: "bg-purple-500",
  "delivery man": "bg-yellow-500",
};

export default function RoleBadge({ role }: { role: string }) {
  return (
    <span className={`px-3 py-1 text-white rounded-md ${roleColors[role] || "bg-gray-500"}`}>
      {role}
    </span>
  );
}
