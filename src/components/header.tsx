import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LinkIcon, LogOut } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const userLoggedIn = false;
  return (
    <nav className="flex justify-between items-center p-4">
      <Link to="/">
        <img
          src="/public/logo.png"
          alt="Logo"
          width={170}
          height={170}
          className="logo"
        />
      </Link>
      {userLoggedIn ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="w-12 h-12 rounded-full overflow-hidden">
            <Avatar className="cursor-pointer w-12 h-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LinkIcon className="mr-2" />
              <span>My Links</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="mr-2" />
              <span className="text-red-400">Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button
          onClick={() => navigate("/auth")}
          size="lg"
          className="bg-blue-500 text-white text-lg hover:bg-blue-600 cursor-pointer"
        >
          Login
        </Button>
      )}
    </nav>
  );
};

export default Header;
