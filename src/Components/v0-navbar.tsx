"use client"

{/* import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { ShoppingCart, Search, User, Package, LogOut, Menu, X, Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

export function Navbar() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const [searchOpen, setSearchOpen] = React.useState(false)

  return (
    <div className={`relative ${isDarkMode ? 'dark' : ''}`}>
      <nav className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="mr-2" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open sidebar</span>
              </Button>
            </div>
            <div className="flex items-center">
              <Button variant="ghost" className="text-lg font-semibold">
                Project Computer Store
              </Button>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <Button variant="ghost" size="icon" className="mr-2" onClick={() => setSearchOpen(!searchOpen)}>
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
                <div className={`absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg transition-all duration-300 ease-in-out ${searchOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full"
                  />
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>


      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-semibold">Menu</span>
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                Mi cuenta
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <Package className="mr-2 h-4 w-4" />
                My orders
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </Button>
            </li>
          </ul>
          <div className="absolute bottom-4 left-4 flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
                className="data-[state=checked]:bg-primary"
              />
              <Label htmlFor="dark-mode" className="text-sm font-medium leading-none">
                {isDarkMode ? 'Dark' : 'Light'}
              </Label>
            </div>
          </div>
        </nav>
      </div>


      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40" 
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
  */}