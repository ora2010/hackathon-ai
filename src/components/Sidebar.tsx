"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, GraduationCap, FileText, User, Sparkles } from "lucide-react";

export function Sidebar() {
    const pathname = usePathname();

    const links = [
        { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
        { href: "/dashboard/universities", label: "Universities", icon: GraduationCap },
        { href: "/dashboard/advisor", label: "AI Advisor", icon: Sparkles },
        { href: "/dashboard/portfolio", label: "Portfolio", icon: FileText },
        { href: "/dashboard/profile", label: "Profile", icon: User },
    ];

    return (
        <aside className="w-64 bg-white border-r border-slate-200 h-screen fixed left-0 top-0 flex flex-col z-10 hidden md:flex">
            <div className="p-6 border-b border-slate-100">
                <h1 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white">
                        <GraduationCap size={20} />
                    </div>
                    CareerPlatform
                </h1>
            </div>

            <nav className="flex-1 p-4 space-y-1">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                                    ? "bg-blue-50 text-accent"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                }`}
                        >
                            <link.icon size={18} />
                            {link.label}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-slate-100">
                <div className="bg-slate-900 rounded-xl p-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <Sparkles size={16} className="text-amber-400" />
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Pro Plan</span>
                    </div>
                    <p className="text-sm text-slate-300 mb-3">Unlock advanced AI analysis for your essays.</p>
                    <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-semibold transition-colors">
                        Upgrade Now
                    </button>
                </div>
            </div>
        </aside>
    );
}
