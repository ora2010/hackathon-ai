"use client";

import Link from "next/link";
import { Button } from "@/components/ui";
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-hidden">
            {/* Navigation */}
            <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
                    <div className="font-bold text-xl flex items-center gap-2">
                        <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                            <TrendingUp size={18} />
                        </div>
                        CareerPlatform
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                        <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
                        <a href="#universities" className="hover:text-slate-900 transition-colors">Universities</a>
                        <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900">Log In</Link>
                        <Link href="/onboarding">
                            <Button>Get Started <ArrowRight size={16} className="ml-2 inline" /></Button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wide">
                            <Sparkles size={12} />
                            AI-Powered Admissions
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                            Your Dream University <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Is Within Reach.</span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-lg">
                            Data-driven guidance, AI essay reviews, and personalized admission strategies. Join thousands of students getting into top universities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/onboarding">
                                <Button className="h-12 px-8 text-lg">Calculate My Chances</Button>
                            </Link>
                            <Button variant="outline" className="h-12 px-8 text-lg">View Demo</Button>
                        </div>
                        <div className="pt-8 flex items-center gap-4 text-sm text-slate-500">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />
                                ))}
                            </div>
                            <p>Trusted by 10,000+ students</p>
                        </div>
                    </motion.div>

                    {/* Hero Visual/Dashboard Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-3xl -z-10 transform rotate-3 scale-95" />
                        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 overflow-hidden">
                            {/* Mock Browser Header */}
                            <div className="h-8 bg-slate-50/50 flex items-center gap-2 px-4 border-b border-slate-100 mb-2">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-amber-400" />
                                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                            </div>
                            {/* Dashboard Preview Image using our actual dashboard layout structure conceptually */}
                            <div className="bg-slate-50 rounded-lg p-6 space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-1/3 h-32 bg-white rounded-xl shadow-sm border border-slate-100 p-4 space-y-2">
                                        <div className="w-8 h-8 bg-blue-100 rounded-lg mb-2" />
                                        <div className="w-16 h-4 bg-slate-100 rounded" />
                                        <div className="w-24 h-6 bg-slate-200 rounded" />
                                    </div>
                                    <div className="w-1/3 h-32 bg-white rounded-xl shadow-sm border border-slate-100 p-4 space-y-2">
                                        <div className="w-8 h-8 bg-emerald-100 rounded-lg mb-2" />
                                        <div className="w-16 h-4 bg-slate-100 rounded" />
                                        <div className="w-24 h-6 bg-slate-200 rounded" />
                                    </div>
                                    <div className="w-1/3 h-32 bg-white rounded-xl shadow-sm border border-slate-100 p-4 space-y-2">
                                        <div className="w-8 h-8 bg-amber-100 rounded-lg mb-2" />
                                        <div className="w-16 h-4 bg-slate-100 rounded" />
                                        <div className="w-24 h-6 bg-slate-200 rounded" />
                                    </div>
                                </div>
                                <div className="flex gap-4 h-48">
                                    <div className="w-2/3 bg-white rounded-xl shadow-sm border border-slate-100 p-4">
                                        <div className="flex gap-2 mb-4">
                                            <div className="w-full h-8 bg-slate-50 rounded" />
                                            <div className="w-12 h-8 bg-blue-500 rounded" />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="w-full h-12 bg-slate-50 rounded border border-slate-50" />
                                            <div className="w-full h-12 bg-slate-50 rounded border border-slate-50" />
                                        </div>
                                    </div>
                                    <div className="w-1/3 bg-slate-900 rounded-xl shadow-sm p-4 relative overflow-hidden">
                                        <div className="w-full h-4 bg-white/10 rounded mb-2" />
                                        <div className="w-1/2 h-8 bg-white/20 rounded" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Feature Section */}
            <section className="py-20 bg-slate-50" id="features">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need to get accepted</h2>
                        <p className="text-slate-500">Our comprehensive platform covers every aspect of the university application process.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Chancing Engine", desc: "Calculate your real admissions chances based on historical data.", color: "bg-blue-500" },
                            { title: "Portfolio Builder", desc: "Showcase your extracurriculars and achievements effectively.", color: "bg-emerald-500" },
                            { title: "AI Essay Advisor", desc: "Get instant feedback on your personal statement wording and structure.", color: "bg-purple-500" }
                        ].map((f, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
                            >
                                <div className={`w-12 h-12 rounded-xl ${f.color} mb-6 flex items-center justify-center text-white`}>
                                    <CheckCircle2 size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
