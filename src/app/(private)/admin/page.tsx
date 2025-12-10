"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  FileText, 
  Music, 
  Video, 
  Settings, 
  Plus, 
  Search, 
  MoreVertical, 
  Edit, 
  Trash2,
  Users,
  User,
  BarChart3
} from "lucide-react";

// Mock Data
const stats = [
  { title: "Total Blogs", value: "12", icon: FileText, color: "bg-blue-500" },
  { title: "Audio Naats", value: "45", icon: Music, color: "bg-purple-500" },
  { title: "Video Naats", value: "28", icon: Video, color: "bg-pink-500" },
  { title: "Total Views", value: "12.5k", icon: BarChart3, color: "bg-green-500" },
];

const blogs = [
  { id: 1, title: "Importance of Prayer", author: "Dr. Ahmed", date: "2023-10-12", status: "Published" },
  { id: 2, title: "Understanding Ramadan", author: "Sarah Khan", date: "2024-03-10", status: "Published" },
  { id: 3, title: "Life of Prophet (PBUH)", author: "Mufti Menk", date: "2024-01-15", status: "Draft" },
];

const audioNaats = [
  { id: 1, title: "Mustafa Jaane Rehmat", reciter: "Owais Raza Qadri", duration: "5:20", status: "Active" },
  { id: 2, title: "Faslon Ko Takalluf", reciter: "Qari Waheed Zafar", duration: "6:15", status: "Active" },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview />;
      case "blogs":
        return <ContentTable title="Blogs" data={blogs} type="blog" />;
      case "audio":
        return <ContentTable title="Audio Naats" data={audioNaats} type="audio" />;
      case "video":
        return <ContentTable title="Video Naats" data={[]} type="video" />; // Empty state example
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar */}
      <aside className={`bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ${sidebarOpen ? "w-64" : "w-20"} hidden md:flex flex-col sticky top-0 h-screen`}>
        <div className="p-6 flex items-center justify-between">
          {sidebarOpen && <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Admin Panel</h1>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <LayoutDashboard className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" active={activeTab === "dashboard"} onClick={() => setActiveTab("dashboard")} expanded={sidebarOpen} />
          <SidebarItem icon={FileText} label="Blogs" active={activeTab === "blogs"} onClick={() => setActiveTab("blogs")} expanded={sidebarOpen} />
          <SidebarItem icon={Music} label="Audio Naats" active={activeTab === "audio"} onClick={() => setActiveTab("audio")} expanded={sidebarOpen} />
          <SidebarItem icon={Video} label="Video Naats" active={activeTab === "video"} onClick={() => setActiveTab("video")} expanded={sidebarOpen} />
          <SidebarItem icon={Users} label="Users" active={activeTab === "users"} onClick={() => setActiveTab("users")} expanded={sidebarOpen} />
          <SidebarItem icon={Settings} label="Settings" active={activeTab === "settings"} onClick={() => setActiveTab("settings")} expanded={sidebarOpen} />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto h-screen">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white capitalize">{activeTab}</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Manage your content and settings</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
                <User className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </div>
          </div>
        </header>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {renderContent()}
        </motion.div>
      </main>
    </div>
  );
}

function SidebarItem({ icon: Icon, label, active, onClick, expanded }: any) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${
        active 
          ? "bg-indigo-600 text-white shadow-md" 
          : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
      }`}
    >
      <Icon className="w-5 h-5 shrink-0" />
      {expanded && <span className="font-medium whitespace-nowrap">{label}</span>}
    </button>
  );
}

function DashboardOverview() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center gap-4">
            <div className={`${stat.color} p-4 rounded-xl text-white`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{stat.title}</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Placeholder */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
        <div className="space-y-4">
            {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 last:border-0">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                        <p className="text-gray-700 dark:text-gray-300">New blog post "Understanding Ramadan" published</p>
                    </div>
                    <span className="text-xs text-gray-400">2 hours ago</span>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function ContentTable({ title, data, type }: any) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title} List</h3>
        <div className="flex gap-3">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input type="text" placeholder="Search..." className="pl-9 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                <Plus className="w-4 h-4" /> Add New
            </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-600 dark:text-gray-400">
          <thead className="bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white font-semibold">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Title</th>
              <th className="p-4">{type === 'blog' ? 'Author' : 'Reciter'}</th>
              <th className="p-4">{type === 'blog' ? 'Date' : 'Duration'}</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
                data.map((item: any) => (
                <tr key={item.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="p-4">#{item.id}</td>
                    <td className="p-4 font-medium text-gray-900 dark:text-white">{item.title}</td>
                    <td className="p-4">{type === 'blog' ? item.author : item.reciter}</td>
                    <td className="p-4">{type === 'blog' ? item.date : item.duration}</td>
                    <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.status === 'Published' || item.status === 'Active' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                        {item.status}
                    </span>
                    </td>
                    <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-blue-600 dark:text-blue-400">
                            <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-red-600 dark:text-red-400">
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                    </td>
                </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={6} className="p-8 text-center text-gray-500">
                        No items found.
                    </td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
