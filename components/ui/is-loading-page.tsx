import { LoaderCircle } from "lucide-react";

export default function IsLoadingPage() {
    return (
        <div className="w-full h-screen flex flex-col justify-center gap-4 items-center">
            <div className="is-loading">
                <LoaderCircle size={80} />
            </div>
        </div>
    );
}