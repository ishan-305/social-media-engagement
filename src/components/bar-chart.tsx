"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { engagementData, summarizeEngagementData } from "@/lib/data";
const chartData = summarizeEngagementData(engagementData);

const chartConfig = {
  totalComments: {
    label: "Comments",
    color: "hsl(var(--chart-1))",
  },
  totalLikes: {
    label: "Likes",
    color: "hsl(var(--chart-2))",
  },
  totalShares: {
    label: "Shares",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function BarChartPost() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Post Wise Performance</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="postType"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              // tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              domain={["auto", "auto"]}
              tickFormatter={(value) => value / 1000 + "K"}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="totalShares"
              stackId="a"
              fill="var(--color-totalShares)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="totalComments"
              stackId="a"
              fill="var(--color-totalComments)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="totalLikes"
              stackId="a"
              fill="var(--color-totalLikes)"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total Engagements for different Post Types
        </div>
      </CardFooter>
    </Card>
  );
}
