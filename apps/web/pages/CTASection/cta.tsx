"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

export default function CTASection() {
  const stats = [
    {
      percentage: "19.4%",
      description: "Cheaper than competitors",
    },
    {
      percentage: "40%",
      description: "Less load consumption",
    },
    {
      percentage: "32%",
      description: "Times nobody picks up your calls",
    },
    {
      percentage: "94.32%",
      description: "Uptime guaranteed lol",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <motion.h2
          initial={{
            opacity: 0,
            y:50
          }}
          whileInView={{
            opacity: 1,
            y:0
          }}
          transition={{
            duration: 2,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Scale with <span className="text-blue-600">NO</span> issues
        </motion.h2>
        <p className="text-gray-600 text-lg">
          Shape AI can handle load times upto 99.99% of the times, the rest of
          the times GOD is against us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <CardContent className="p-8">
              <div className="text-4xl font-bold mb-2">{stat.percentage}</div>
              <p className="text-gray-600 text-base">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
