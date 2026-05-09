"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mic, ArrowRight, Sparkles } from "lucide-react";

interface TakeTestModalProps {
  children: React.ReactNode;
}

export function TakeTestModal({ children }: TakeTestModalProps) {
  const [loginName, setLoginName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginName.trim().toLowerCase() === "sk") {
      window.open("https://launch.zlaqa.com/sessions/", "_blank");
    } else {
      window.open("https://launch.zlaqa.com", "_blank");
    }
    setIsOpen(false);
    setLoginName("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border-0 p-0 overflow-hidden bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl">
        {/* Premium Header Background */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-br from-[#9DDB2C]/20 via-white/50 to-transparent -z-10" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#9DDB2C]/10 rounded-full blur-3xl -z-10" />
        
        <div className="p-8">
          <DialogHeader className="mb-8 space-y-4 text-center relative">
            <div>
              <DialogTitle className="text-2xl font-bold tracking-tight text-zinc-900 mb-1">
                Start Your Analysis
              </DialogTitle>
              <p className="text-sm text-zinc-500 font-medium">
                Enter your name to begin your 15-second speech profile recording.
              </p>
            </div>
          </DialogHeader>

          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <div className="space-y-3">
              <label htmlFor="name" className="text-xs font-bold text-zinc-400 uppercase tracking-wider ml-1">
                Your Name
              </label>
              <div className="relative group">
                <Input
                  id="name"
                  placeholder="e.g. John Doe"
                  value={loginName}
                  onChange={(e) => setLoginName(e.target.value)}
                  required
                  className="h-14 px-5 bg-zinc-50/80 border-zinc-200/80 text-lg rounded-2xl focus-visible:ring-4 focus-visible:ring-[#9DDB2C]/20 focus-visible:border-[#9DDB2C] transition-all placeholder:text-zinc-300 shadow-sm font-medium"
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-14 bg-black text-white hover:bg-zinc-800 rounded-2xl text-[16px] font-bold shadow-xl shadow-black/10 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 group overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <span className="relative flex items-center justify-center">
                Continue to Test
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold text-zinc-400">
            <span>Takes only 15 seconds</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
