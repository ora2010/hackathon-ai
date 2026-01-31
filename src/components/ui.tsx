import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import React from "react";

// --- Utility (we can move this to src/lib/utils.ts later if needed, but keeping here for speed for now) ---
// Since we don't have clsx/tailwind-merge installed yet as explicit deps, we'll implement a simple version or install them. 
// Actually, let's keep it simple for now and install 'clsx' and 'tailwind-merge' which are standard.

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
    return (
        <div className={`bg-surface border border-slate-200 rounded-xl shadow-sm ${className}`}>
            {children}
        </div>
    );
}

export function Button({ className, variant = "primary", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "outline" | "ghost" }) {
    const base = "px-4 py-2 rounded-lg font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
    const variants = {
        primary: "bg-accent text-white hover:bg-accent-hover shadow-sm",
        outline: "border border-slate-200 hover:bg-slate-50 text-slate-700",
        ghost: "hover:bg-slate-100 text-slate-600"
    };

    return (
        <button className={`${base} ${variants[variant]} ${className || ""}`} {...props} />
    );
}

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className={`w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all placeholder:text-slate-400 ${className || ""}`}
            {...props}
        />
    );
}

export function Label({ className, children, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
    return (
        <label className={`block text-sm font-medium text-slate-700 mb-1 ${className || ""}`} {...props}>
            {children}
        </label>
    )
}
