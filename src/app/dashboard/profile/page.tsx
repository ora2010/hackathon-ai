"use client";

import { useState, useEffect } from "react";
import { User, MapPin, Star, GraduationCap, Settings, Mail, Phone, Edit } from "lucide-react";
import { Card, Button } from "@/components/ui";
import { motion } from "framer-motion";

export default function ProfilePage() {
    // Mock data - in a real app this would come from a database/context
    const user = {
        firstName: "Oralhan",
        lastName: "Student",
        email: "oralhan@example.com",
        avatar: null, // null = show initials
        location: "Astana, Kazakhstan",
        stats: {
            gpa: "3.8",
            sat: "1450",
            ielts: "7.5"
        }
    };

    const savedUniversities = [
        {
            id: 1,
            name: "Nazarbayev University",
            location: "Astana, Kazakhstan",
            ranking: "#1 in Central Asia",
            match: 98,
            programs: ["Computer Science", "Robotics"]
        },
        {
            id: 2,
            name: "KAIST",
            location: "Daejeon, South Korea",
            ranking: "#40 Global",
            match: 85,
            programs: ["Engineering", "AI"]
        },
        {
            id: 3,
            name: "University of Toronto",
            location: "Toronto, Canada",
            ranking: "#21 Global",
            match: 72,
            programs: ["Data Science", "Business"]
        }
    ];

    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            {/* Profile Header */}
            <div className="relative">
                {/* Cover Image */}
                <div className="h-48 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 overflow-hidden">
                    <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Profile Info Overlay/Section */}
                <div className="px-8 pb-8">
                    <div className="relative flex flex-col md:flex-row items-end -mt-16 gap-6">
                        {/* Avatar */}
                        <div className="w-32 h-32 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center shadow-md relative group cursor-pointer overflow-hidden">
                            {user.avatar ? (
                                <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-4xl font-bold text-slate-400">
                                    {user.firstName[0]}{user.lastName[0]}
                                </span>
                            )}
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Edit className="text-white" size={24} />
                            </div>
                        </div>

                        {/* Name & Actions */}
                        <div className="flex-1 md:mb-4 text-center md:text-left">
                            <h1 className="text-3xl font-bold text-slate-900">{user.firstName} {user.lastName}</h1>
                            <div className="flex items-center justify-center md:justify-start gap-4 text-slate-500 mt-1">
                                <span className="flex items-center gap-1"><MapPin size={16} /> {user.location}</span>
                                <span className="flex items-center gap-1"><Mail size={16} /> {user.email}</span>
                            </div>
                        </div>

                        <div className="mb-4 flex gap-3">
                            <Button variant="outline">Edit Profile</Button>
                            <Button variant="ghost" className="text-slate-500"><Settings size={20} /></Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Left Column: Stats & Portfolio */}
                <div className="space-y-6">
                    <Card className="p-6">
                        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <GraduationCap size={20} className="text-blue-500" /> Academic Stats
                        </h3>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                                <div className="text-2xl font-bold text-slate-900">{user.stats.gpa}</div>
                                <div className="text-xs text-slate-500 font-medium">GPA</div>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                                <div className="text-2xl font-bold text-slate-900">{user.stats.sat}</div>
                                <div className="text-xs text-slate-500 font-medium">SAT</div>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                                <div className="text-2xl font-bold text-slate-900">{user.stats.ielts}</div>
                                <div className="text-xs text-slate-500 font-medium">IELTS</div>
                            </div>
                        </div>
                        <Button variant="ghost" className="w-full mt-4 text-xs">View Full Portfolio →</Button>
                    </Card>

                    <Card className="p-6">
                        <h3 className="font-bold text-slate-900 mb-4">Focus Areas</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Computer Science", "Mathematics", "Robotics", "Physics"].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Right Column: Favorited Universities */}
                <div className="md:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-slate-900">Saved Universities</h2>
                        <Button variant="ghost" className="text-sm">Manage List</Button>
                    </div>

                    <div className="space-y-4">
                        {savedUniversities.map((uni, index) => (
                            <motion.div
                                key={uni.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="p-0 overflow-hidden hover:shadow-md transition-shadow group">
                                    <div className="p-6 flex flex-col md:flex-row gap-6">
                                        {/* Logo Placeholder */}
                                        <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center shrink-0 text-slate-400">
                                            <GraduationCap size={32} />
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                                                        {uni.name}
                                                    </h3>
                                                    <p className="text-slate-500 text-sm flex items-center gap-2 mt-1">
                                                        <MapPin size={14} /> {uni.location}
                                                        <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                                        <span className="text-amber-600 font-medium text-xs bg-amber-50 px-2 py-0.5 rounded-full">{uni.ranking}</span>
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">
                                                    {uni.match}% Match
                                                </div>
                                            </div>

                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {uni.programs.map(prog => (
                                                    <span key={prog} className="text-xs text-slate-600 bg-slate-50 border border-slate-100 px-2 py-1 rounded-md">
                                                        {prog}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex justify-between items-center">
                                        <span className="text-xs text-slate-500">Added to favorites 2 days ago</span>
                                        <div className="flex gap-2">
                                            <Button variant="ghost" className="h-8 text-xs text-red-500 hover:bg-red-50 hover:text-red-600">Remove</Button>
                                            <Button className="h-8 text-xs bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-black shadow-sm">View Details</Button>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <div className="p-8 border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-center text-slate-500 hover:border-blue-300 hover:bg-blue-50/50 transition-colors cursor-pointer group">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform">
                            <Star size={20} className="text-blue-500" />
                        </div>
                        <h4 className="font-medium text-slate-900">Explore More Universities</h4>
                        <p className="text-sm max-w-xs mt-1">Based on your portfolio, we have found 5 more universities that match your profile.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
