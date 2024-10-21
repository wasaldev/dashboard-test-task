"use client";
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Users,
  UserPlus,
  UserMinus,
  RefreshCw,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getUsers } from "@/services/users-service";

/**
 * Interface representing the user data structure.
 */
interface User {
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive";
  avatar: string;
}

/**
 * Dashboard component responsible for displaying and managing the user list.
 * It includes functionality for filtering users, updating status, and showing skeleton loaders.
 */
export default function Dashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [showOnlyActive, setShowOnlyActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Sets a user's status to active.
   * @param {number} userId - The ID of the user to update.
   */
  const setUserActive = (userId: number) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, status: "active" } : user
      )
    );
  };

  /**
   * Sets a user's status to inactive.
   * @param {number} userId - The ID of the user to update.
   */
  const setUserInActive = (userId: number) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, status: "inactive" } : user
      )
    );
  };

  // Fetch users when the component mounts.
  useEffect(() => {
    fetchUsers();
  }, []);

  // Filter users based on the active status or search term.
  useEffect(() => {
    filterUsers();
  }, [users, showOnlyActive, searchTerm]);

  /**
   * Fetches users from the backend API and updates the state.
   */
  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const data: User[] = await getUsers();
      // @ts-expect-error: type error
      setUsers(data?.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Filters the users based on active status and search term.
   */
  const filterUsers = () => {
    let filtered = users;
    if (showOnlyActive) {
      filtered = filtered.filter((user) => user.status === "active");
    }
    if (searchTerm) {
      filtered = filtered.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredUsers(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto p-4">
        <header className="flex justify-between items-center mb-8 py-4">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Admin</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      admin@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <Card className="w-full overflow-hidden bg-white/10 backdrop-blur-lg border-0 shadow-2xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6 bg-gradient-to-r from-purple-500 to-pink-500">
            <CardTitle className="text-2xl font-bold text-white">
              User Management
            </CardTitle>
            <Users className="h-6 w-6 text-white" />
          </CardHeader>

          <CardContent>
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 mt-6">
              <div className="flex items-center space-x-2">
                <Switch
                  id="active-filter"
                  checked={showOnlyActive}
                  onCheckedChange={setShowOnlyActive}
                />
                <label
                  htmlFor="active-filter"
                  className="text-sm font-medium text-white"
                >
                  Show only active users
                </label>
              </div>
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 w-full md:w-64 bg-white/20 border-0 placeholder-gray-400 text-white"
                />
              </div>
            </div>

            <div className="rounded-md border border-gray-700 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-white/5 transition-colors">
                    <TableHead className="text-gray-400 w-[50px]">Id</TableHead>
                    <TableHead className="w-[100px] text-gray-400">
                      Avatar
                    </TableHead>
                    <TableHead className="text-gray-400">Name</TableHead>
                    <TableHead className="text-gray-400">Email</TableHead>
                    <TableHead className="text-gray-400">Status</TableHead>
                    <TableHead className="text-right text-gray-400">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <AnimatePresence>
                    {isLoading
                      ? Array.from({ length: 5 }).map((_, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <Skeleton className="h-4 w-[50px] bg-gray-700" />
                            </TableCell>
                            <TableCell>
                              <Skeleton className="h-10 w-10 rounded-full bg-gray-700" />
                            </TableCell>
                            <TableCell>
                              <Skeleton className="h-4 w-[250px] bg-gray-700" />
                            </TableCell>
                            <TableCell>
                              <Skeleton className="h-4 w-[250px] bg-gray-700" />
                            </TableCell>
                            <TableCell>
                              <Skeleton className="h-4 w-[100px] bg-gray-700" />
                            </TableCell>
                            <TableCell>
                              <Skeleton className="h-10 w-[100px] float-right bg-gray-700" />
                            </TableCell>
                          </TableRow>
                        ))
                      : filteredUsers?.map((user) => (
                          <motion.tr
                            key={user.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="hover:bg-white/5 transition-colors"
                          >
                            <TableCell className="font-medium text-white">
                              {user.id}
                            </TableCell>
                            <TableCell>
                              <Avatar>
                                <AvatarImage
                                  src={user.avatar}
                                  alt={user.name}
                                />
                                <AvatarFallback>
                                  {user.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                            </TableCell>
                            <TableCell className="font-medium text-white">
                              {user.name}
                            </TableCell>
                            <TableCell className="text-white">
                              {user.email}
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  user.status === "active"
                                    ? "default"
                                    : "secondary"
                                }
                                className={`capitalize ${
                                  user.status === "active"
                                    ? "bg-green-500"
                                    : "bg-gray-500"
                                }`}
                              >
                                {user.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-white/10"
                                onClick={() =>
                                  user.status === "active"
                                    ? setUserInActive(user.id)
                                    : setUserActive(user.id)
                                }
                              >
                                {user.status === "active" ? (
                                  <UserMinus className="h-4 w-4 text-white" />
                                ) : (
                                  <UserPlus className="h-4 w-4 text-white" />
                                )}
                              </Button>
                            </TableCell>
                          </motion.tr>
                        ))}
                  </AnimatePresence>
                </TableBody>
              </Table>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <p className="text-sm text-gray-400">
                Showing {filteredUsers.length} of {users.length} users
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={fetchUsers}
                disabled={isLoading}
                className="bg-white/10 hover:bg-white/20 text-white border-0"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
