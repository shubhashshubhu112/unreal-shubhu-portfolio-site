
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LogOut, Plus, Edit, Trash2, FileText, Briefcase, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("adminAuthenticated");
    if (auth === "true") {
      setIsAuthenticated(true);
    } else {
      window.location.href = "/admin-login";
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    window.location.href = "/";
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  // Mock data for demonstration
  const portfolioItems = [
    { id: 1, title: "Procedural Landscape System", status: "Published", lastModified: "2024-12-15" },
    { id: 2, title: "AR Visualization Platform", status: "Published", lastModified: "2024-12-10" },
    { id: 3, title: "Performance Optimization Suite", status: "Draft", lastModified: "2024-12-08" },
  ];

  const blogPosts = [
    { id: 1, title: "Optimizing Unreal Engine 5 for Mobile AR", status: "Published", lastModified: "2024-12-15" },
    { id: 2, title: "Procedural Landscape Generation", status: "Published", lastModified: "2024-12-08" },
    { id: 3, title: "Advanced Shader Techniques", status: "Draft", lastModified: "2024-12-01" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <Link to="/admin/users">
                <Button variant="outline" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  User Management
                </Button>
              </Link>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Projects</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">12</p>
                </div>
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Blog Posts</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">8</p>
                </div>
                <FileText className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Users</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">5</p>
                </div>
                <Users className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Drafts</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">2</p>
                </div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Portfolio Management */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl text-gray-900 dark:text-gray-100">Portfolio Projects</CardTitle>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Project
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {portfolioItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 dark:text-gray-100">{item.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Last modified: {item.lastModified}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={item.status === "Published" ? "default" : "secondary"}>
                        {item.status}
                      </Badge>
                      <div className="flex gap-1">
                        <Button size="sm" variant="ghost">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Blog Management */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl text-gray-900 dark:text-gray-100">Blog Posts</CardTitle>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {blogPosts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 dark:text-gray-100">{post.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Last modified: {post.lastModified}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={post.status === "Published" ? "default" : "secondary"}>
                        {post.status}
                      </Badge>
                      <div className="flex gap-1">
                        <Button size="sm" variant="ghost">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900 dark:text-gray-100">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Plus className="w-6 h-6 mb-2" />
                Add New Project
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <FileText className="w-6 h-6 mb-2" />
                Write Blog Post
              </Button>
              <Link to="/admin/users" className="w-full">
                <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center">
                  <Users className="w-6 h-6 mb-2" />
                  Manage Users
                </Button>
              </Link>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Edit className="w-6 h-6 mb-2" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
