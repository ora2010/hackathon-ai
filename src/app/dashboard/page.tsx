"use client";

import { Card, Button } from "@/components/ui";
import { PieChart, ListTodo, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Welcome back, Oralhan! 👋</h1>
                    <p className="text-slate-500">Here's what's happening with your applications today.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline">Update Stats</Button>
                    <Button>Add New University</Button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 border-l-4 border-l-blue-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-slate-500 mb-1">Admission Probability</p>
                            <h3 className="text-3xl font-bold text-slate-900">High</h3>
                        </div>
                        <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                            <TrendingUp size={20} />
                        </div>
                    </div>
                    <p className="text-xs text-slate-400 mt-4">Based on your recent IELTS score</p>
                </Card>

                <Card className="p-6 border-l-4 border-l-emerald-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-slate-500 mb-1">Profile Strength</p>
                            <h3 className="text-3xl font-bold text-slate-900">85%</h3>
                        </div>
                        <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                            <PieChart size={20} />
                        </div>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full mt-4 overflow-hidden">
                        <div className="bg-emerald-500 h-full rounded-full" style={{ width: "85%" }} />
                    </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-amber-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-slate-500 mb-1">Essay Status</p>
                            <h3 className="text-3xl font-bold text-slate-900">2 Pending</h3>
                        </div>
                        <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                            <ListTodo size={20} />
                        </div>
                    </div>
                    <p className="text-xs text-slate-400 mt-4">Deadlines approaching in 14 days</p>
                </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-lg font-bold text-slate-900">Recommended Next Steps</h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.01 }}
                                className="group bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 cursor-pointer hover:border-blue-300 transition-all"
                            >
                                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${i === 1 ? "bg-red-50 text-red-500" : "bg-blue-50 text-blue-500"}`}>
                                    {i === 1 ? <AlertCircle size={20} /> : <CheckCircle2 size={20} />}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {i === 1 ? "Upload your SAT Score Report" : i === 2 ? "Complete 'Why Major?' Essay Draft" : "Research Financial Aid Options"}
                                    </h4>
                                    <p className="text-sm text-slate-500">
                                        {i === 1 ? "Required for 3 universities on your list" : "AI Advisor suggests focusing on your leadership experience"}
                                    </p>
                                </div>
                                <Button variant="ghost" className="text-xs">Start</Button>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Side Widgets */}
                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="font-bold text-lg mb-2">Weekly Chancing Update</h3>
                            <p className="text-slate-300 text-sm mb-4">Your chances for NU increased by 5% after adding your recent Math Olympiad award.</p>
                            <Button variant="ghost" className="bg-white/10 hover:bg-white/20 text-white w-full">View Details</Button>
                        </div>
                        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
}
