"use client";

import { motion } from "framer-motion";
import { Star, MapPin, GraduationCap, ChevronRight } from "lucide-react";

interface University {
    id: string;
    name: string;
    rating: number;
    location: string;
    match: number;
    programs: string[];
}

const universities: University[] = [
    {
        id: "1",
        name: "Назарбаев Университеті",
        rating: 4.9,
        location: "Астана",
        match: 98,
        programs: ["Computer Science", "Engineering", "Mathematics"],
    },
    {
        id: "2",
        name: "ҚБТУ (KBTU)",
        rating: 4.7,
        location: "Алматы",
        match: 92,
        programs: ["Information Systems", "Oil & Gas", "Business"],
    },
    {
        id: "3",
        name: "СДУ (SDU)",
        rating: 4.6,
        location: "Қаскелең",
        match: 88,
        programs: ["Computer Engineering", "Law", "Finance"],
    },
];

export default function UniversityResults() {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
                Ұсынылатын Университеттер
            </h2>
            <div className="grid gap-4">
                {universities.map((uni, index) => (
                    <motion.div
                        key={uni.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-pointer"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {uni.name}
                                </h3>
                                <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                                    <MapPin size={14} />
                                    <span>{uni.location}</span>
                                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                    <div className="flex items-center gap-1 text-amber-500">
                                        <Star size={14} fill="currentColor" />
                                        <span className="font-medium">{uni.rating}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-lg text-sm font-medium">
                                {uni.match}% Сәйкестік
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {uni.programs.map((prog) => (
                                <span
                                    key={prog}
                                    className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md border border-gray-100 flex items-center gap-1"
                                >
                                    <GraduationCap size={12} />
                                    {prog}
                                </span>
                            ))}
                        </div>

                        <div className="mt-3 flex justify-end text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                            <ChevronRight size={20} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
