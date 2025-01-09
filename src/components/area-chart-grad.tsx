"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { engagementData } from "@/lib/data";
import { formatRevalidate } from "next/dist/server/lib/revalidate";
const chartData = engagementData;

const chartConfig = {
  Likes: {
    label: "Likes",
    color: "hsl(var(--chart-1))",
  },
  Shares: {
    label: "Shares",
    color: "hsl(var(--chart-2))",
  },
  Comments: {
    label: "Comments",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

export function AreaChartGrad() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Area Chart - Gradient</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="Posted_Date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(date) => formatDate(date)}
            />
            <YAxis
              // dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              domain={[
                (dataMin: number) => dataMin,
                (dataMax: number) => dataMax + 100,
              ]}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillComments" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-Comments)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-Comments)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillShares" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-Shares)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-Shares)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillLikes" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-Likes)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-Likes)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="Comments"
              type="natural"
              fill="url(#fillComments)"
              fillOpacity={0.4}
              stroke="var(--color-Comments)"
              stackId="a"
            />
            <Area
              dataKey="Shares"
              type="natural"
              fill="url(#fillShares)"
              fillOpacity={0.4}
              stroke="var(--color-Shares)"
              stackId="a"
            />
            <Area
              dataKey="Likes"
              type="natural"
              fill="url(#fillLikes)"
              fillOpacity={0.4}
              stroke="var(--color-Likes)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
