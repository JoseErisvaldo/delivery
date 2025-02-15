import { House, LayoutDashboard, UserRoundPen, Users } from "lucide-react";

export const sideBar = [ 
  {
    href: "/",
    icon: <House />,
    name: "Home",
  },
  {
    href: "/dashboard",
    icon: <LayoutDashboard />,
    name: "Dashboard",
  },
  {
    href: "/members",
    icon: <Users />,
    name: "Membros",
  },
  {
    href: "/profile",
    icon: <UserRoundPen />,
    name: "Profile",
  },
  
]