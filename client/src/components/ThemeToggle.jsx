import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="relative rounded-full bg-yellow-300 dark:bg-black" variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
            align="end"
            className="bg-white dark:bg-[#242526] border border-gray-200 dark:border-gray-600 rounded-md shadow-lg p-1 w-40"
          >
            <DropdownMenuItem
              onSelect={() => setTheme("light")}
              className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#3a3b3c] transition-colors dark:text-white"
            >
              Light
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() => setTheme("dark")}
              className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#3a3b3c] transition-colors dark:text-white"
            >
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() => setTheme("system")}
              className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#3a3b3c] transition-colors dark:text-white"
            >
              System
            </DropdownMenuItem>
          </DropdownMenuContent>

    
    
    </DropdownMenu>
  );
}
