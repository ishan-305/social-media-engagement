"use client";

import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  description: string;
  change: number;
  trend?: "up" | "down";
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  description,
  change,
  trend = "up",
}: StatCardProps) {
  const isPositive = trend === "up";
  const Arrow = isPositive ? ArrowUpRight : ArrowDownRight;

  return (
    <Card className="relative overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold">{value}</div>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
          <div
            className={cn(
              "flex items-center space-x-1 rounded-lg px-2 py-1",
              isPositive
                ? "bg-emerald-50 text-emerald-500 dark:bg-emerald-500/20"
                : "bg-red-50 text-red-500 dark:bg-red-500/20"
            )}
          >
            <Arrow className="h-3 w-3" />
            <span className="text-xs font-medium">{Math.abs(change)}%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
