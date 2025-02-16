import { CircleX } from "lucide-react";
import { useTheme } from "next-themes";

export default function SideBarEnd({ children, title, onClick }: { children: React.ReactNode, title: string, onClick: () => void }) {    
    const { theme, setTheme } = useTheme();
    return (
        <div className={`absolute right-0 top-0 ${theme === "light" ? "bg-white" : "bg-gray-800"} h-screen w-full sm:w-96 border border-foreground/10 p-4 rounded-md`}>
            <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium">{title}</span>
                <button onClick={onClick}>
                    <CircleX className="w-8 h-8" />
                </button>
            </div>
            {children}
        </div>
    );
}