"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, School, Award, Trophy } from "lucide-react";
import { Button, Input, Label, Card } from "@/components/ui";
import { useRouter } from "next/navigation";

export default function Onboarding() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        gpa: "",
        sat: "",
        ielts: "",
        extracurriculars: "",
        honors: "",
    });

    const nextStep = () => setStep((s) => Math.min(s + 1, 4));
    const prevStep = () => setStep((s) => Math.max(s - 1, 1));

    const handleSubmit = () => {
        // In a real app, save to DB/Local Storage
        localStorage.setItem("userStats", JSON.stringify(formData));
        router.push("/dashboard");
    };

    const steps = [
        { id: 1, title: "Academic Stats", icon: School },
        { id: 2, title: "Extracurriculars", icon: Trophy },
        { id: 3, title: "Achievements", icon: Award },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
            <div className="w-full max-w-2xl">
                {/* Progress Bar */}
                <div className="mb-8 flex justify-between items-center relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-slate-200 w-full rounded-full -z-10" />
                    <div
                        className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-accent transition-all duration-300 rounded-full -z-10"
                        style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
                    />

                    {steps.map((s) => (
                        <div key={s.id} className={`flex flex-col items-center gap-2 bg-slate-50 px-2`}>
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${step >= s.id
                                        ? "border-accent bg-accent text-white"
                                        : "border-slate-300 bg-white text-slate-300"
                                    }`}
                            >
                                <s.icon size={18} />
                            </div>
                            <span className={`text-xs font-medium ${step >= s.id ? "text-slate-800" : "text-slate-400"}`}>
                                {s.title}
                            </span>
                        </div>
                    ))}
                </div>

                <Card className="p-8">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="space-y-6"
                            >
                                <div className="text-center mb-6">
                                    <h2 className="text-2xl font-bold text-slate-900">Academic Snapshot</h2>
                                    <p className="text-slate-500">Let's start with your grades and test scores.</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Label>GPA (4.0 scale)</Label>
                                        <Input
                                            placeholder="3.8"
                                            type="number"
                                            value={formData.gpa}
                                            onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <Label>SAT Score</Label>
                                        <Input
                                            placeholder="1450"
                                            type="number"
                                            value={formData.sat}
                                            onChange={(e) => setFormData({ ...formData, sat: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <Label>IELTS / TOEFL</Label>
                                        <Input
                                            placeholder="7.5"
                                            value={formData.ielts}
                                            onChange={(e) => setFormData({ ...formData, ielts: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="space-y-6"
                            >
                                <div className="text-center mb-6">
                                    <h2 className="text-2xl font-bold text-slate-900">Extracurriculars</h2>
                                    <p className="text-slate-500">What do you do outside the classroom?</p>
                                </div>

                                <div>
                                    <Label>Activities List</Label>
                                    <textarea
                                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent min-h-[150px]"
                                        placeholder="1. Debate Club President - Organized regional tournament...&#10;2. Varsity Soccer - Team Captain..."
                                        value={formData.extracurriculars}
                                        onChange={(e) => setFormData({ ...formData, extracurriculars: e.target.value })}
                                    />
                                    <p className="text-xs text-slate-400 mt-2">List your top 5 activities with brief descriptions.</p>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="space-y-6"
                            >
                                <div className="text-center mb-6">
                                    <h2 className="text-2xl font-bold text-slate-900">Honors & Awards</h2>
                                    <p className="text-slate-500">Show off your achievements!</p>
                                </div>

                                <div>
                                    <Label>Awards List</Label>
                                    <textarea
                                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent min-h-[150px]"
                                        placeholder="1. National Math Olympiad - Gold Medal&#10;2. Best Speaker Award - City Debate Format..."
                                        value={formData.honors}
                                        onChange={(e) => setFormData({ ...formData, honors: e.target.value })}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="flex justify-between mt-8 pt-6 border-t border-slate-100">
                        <Button
                            variant="ghost"
                            onClick={prevStep}
                            disabled={step === 1}
                            className={step === 1 ? "invisible" : ""}
                        >
                            <ArrowLeft size={16} className="mr-2 inline" /> Back
                        </Button>

                        {step < 3 ? (
                            <Button onClick={nextStep}>
                                Next Step <ArrowRight size={16} className="ml-2 inline" />
                            </Button>
                        ) : (
                            <Button onClick={handleSubmit} className="bg-emerald-500 hover:bg-emerald-600">
                                Finish & Go to Dashboard <CheckCircle size={16} className="ml-2 inline" />
                            </Button>
                        )}
                    </div>
                </Card>
            </div>
        </div>
    );
}
