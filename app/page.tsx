import { ModeToggle } from "@/components/ui/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="">
      <h1>Hello App</h1>
      <ModeToggle />
      <UserButton />
    </div>
  );
}
