import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const fonts = Poppins({ subsets: ["latin"], weight: "600" });

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            fonts.className
          )}
        >
          🔐 Auth
        </h1>
        <p className="text-white text-lg">a simple authentication service</p>
        <LoginButton>
          <Button size={"lg"} variant={"secondary"}>
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
