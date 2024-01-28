import { navbarRoutes } from "@/config/navbar-routes"
import NavItem from "./nav-item"
import Logo from "@/components/Logo"
import { Button } from "@/components/ui/button"
import { Lock, User } from "lucide-react"

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-around bg-primary h-24">
        <Logo />
        <div className="space-x-4">
            {navbarRoutes.map(({label, href}) => <NavItem key={label} href={href} label={label}/>)}
        </div>
        <div className="space-x-3">
            <Button className="space-x-1">
                <User />
                <p>Apply</p>
            </Button>
            <Button className="space-x-1" variant="ghost">
                <Lock />
                <p>Login / Sign up</p>
            </Button>
        </div>
    </nav>
  )
}

export default Navbar