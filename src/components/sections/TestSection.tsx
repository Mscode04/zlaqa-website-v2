"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Target,
  ClipboardList,
  Users,
  Trophy,
  MessageCircle,
  ArrowRight,
  Clock,
  Mic,
  MicOff,
  Sparkles,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TakeTestModal } from "@/components/TakeTestModal";
import { EXTERNAL_URLS, TEST_FEATURES, TEST_STATS, TEST_HOW_IT_WORKS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Target,
  ClipboardList,
  Users,
  Trophy,
  MessageCircle,
};

export function TestSection() {
  return (
    <section id="test" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#9DDB2C]/5 skew-x-12 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-zinc-100 skew-x-12 blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-medium mb-6"
            >
              <Sparkles className="w-3 h-3 text-[#9DDB2C]" />
              <span>Free Analysis</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Understand Your <br />
              <span className="text-zinc-400">Speech Profile</span>
            </h2>

            <p className="text-lg text-zinc-500 mb-8 max-w-md">
              Record a 15-second audio and get a detailed report on your fluency, blocks, repetitions, and prolongations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <TakeTestModal>
                <Button
                  size="lg"
                  className="group h-12 px-8 bg-[#9DDB2C] hover:bg-[#8bc925] text-black font-bold rounded-full transition-all hover:scale-105"
                >
                  Start Analysis
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </TakeTestModal>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm font-medium text-zinc-400">
              {TEST_STATS.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-black font-bold text-lg leading-none">{stat.value}</span>
                  <span className="text-xs">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Modern Cards */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid gap-4"
            >
              {TEST_HOW_IT_WORKS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="bg-white border border-zinc-100 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-[#9DDB2C]/30 transition-all flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center font-bold text-sm text-zinc-400 group-hover:bg-[#9DDB2C] group-hover:text-black transition-colors">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900">{item.title}</h4>
                    <p className="text-sm text-zinc-500">{item.description}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-zinc-300 ml-auto group-hover:text-[#9DDB2C] transition-colors" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Features Minimal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-zinc-100 pt-16">
          {TEST_FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="text-center group"
              >
                <div className="mx-auto w-12 h-12 rounded-xl bg-[#9DDB2C]/5 flex items-center justify-center mb-4 group-hover:bg-[#9DDB2C]/20 transition-colors">
                  <Icon className="w-5 h-5 text-[#9DDB2C]" />
                </div>
                <h4 className="font-bold text-zinc-900 mb-1">{feature.title}</h4>
                <p className="text-sm text-zinc-500">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
