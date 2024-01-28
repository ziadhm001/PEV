import { navbarRoutes } from "@/config/navbar-routes"
import NavItem from "./nav-item"
import Logo from "@/components/Logo"
import { Button } from "@/components/ui/button"
import { Lock, User } from "lucide-react"

const Footer = () => {
  return (
    <footer className="z-50 absolute w-full flex flex-col items-center justify-around bg-primary h-96 p-12">
      <div className="flex flex-row w-full">
        <p className="text-white w-1/4 justify-center mt-12">Prime Elevate gives you the blocks and components you need to create a truly professional website.</p>
        <div className="flex flex-col w-1/4 items-center space-y-6">
            <p className="font-button text-white">COMPANY</p>
            <p className="font-body text-white">About</p>
            <p className="font-body text-white">Features</p>
            <p className="font-body text-white">Works</p>
            <p className="font-body text-white">Career</p>
        </div>
        <div className="flex flex-col w-1/4 items-center space-y-6">
            <p className="font-button text-white">HELP</p>
            <p className="font-body text-white">Customer Support</p>
            <p className="font-body text-white">Delivery Details</p>
            <p className="font-body text-white">Terms & Conditions</p>
            <p className="font-body text-white">Privacy Policy</p>
        </div>
        <div className="flex flex-col w-1/4 items-start space-y-2">
            <p className="font-button text-white mb-4">Newsletter</p>
            <input
              type="text"
              className="bg-white p-4 text-16 text-[#39807F] placeholder-[#39807F] placeholder-opacity-60 bg-transparent border-none outline-none focus:ring focus:border-[#39807F] rounded-2xl w-72"
              placeholder="Enter your email address"
            />
            <Button className="w-72 bg-green-600 hover:bg-green-700">Sign Up Now</Button>
        </div>
      </div>
        <hr className="w-full h-0 border-t border-[#FAF0E7]"/>
        <p className="text-white font-body">© Copyright 2024, All Rights Reserved by prime elevate</p>
    </footer>
  )
}

export default Footer