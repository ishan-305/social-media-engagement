"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

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
import { calculateLikesPercentage } from "@/lib/calculateLikes";
const chartData = calculateLikesPercentage(engagementData);

const chartConfig = {
  Post_Type: {
    label: "Post Type",
    color: "hsl(var(--chart-1))",
  },
  Likes_Percentage: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;

export function AreaChartStacked() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Likes Breakdown By Post Type</CardTitle>
        <CardDescription>
          Showing Total Percentage Likes on Different Posts
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="Post_Type"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              hide
            />
            <XAxis
              dataKey="Likes_Percentage"
              tickFormatter={(value) => `${value}%`}
              domain={[0, (dataMax: number) => dataMax + 10]}
              type="number"
              hide
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="Likes_Percentage"
              layout="vertical"
              fill="var(--color-Post_Type)"
              radius={8}
              barSize={40}
            >
              <LabelList
                dataKey="Post_Type"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="Likes_Percentage"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% on Reels <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground"></div>
      </CardFooter>
    </Card>
  );
}
