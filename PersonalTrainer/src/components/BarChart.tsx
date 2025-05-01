"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Label } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Training } from "@/Types";
import { useState, useEffect } from "react";

const chartConfig = {
  trainingHours: {
    label: "Training time",
    color: "#2563eb",
  },
} satisfies ChartConfig;

export function Chart() {
  const [trainingData, setTrainingData] = useState<{ activity: string; totalMinutes: number }[]>([]);

  const fetchTrainings = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/trainings`)
      .then((response) => response.json())
      .then((trainings) => {
        const data = trainings._embedded.trainings;

        const groupedData = data.reduce((acc: Record<string, number>, training: Training) => {
          const activity = training.activity;
          const minutes = training.duration;
          acc[activity] = (acc[activity] || 0) + minutes;
          return acc;
        }, {});

        const formattedData = Object.entries(groupedData).map(([activity, totalMinutes]) => ({
          activity,
          totalMinutes: totalMinutes as number,
        }));

        setTrainingData(formattedData);
      })
      .catch((error) => console.error("Error fetching trainings:", error));
  };

  useEffect(() => {
    fetchTrainings();
  }, []);

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart
        width={600}
        height={300}
        data={trainingData}
        margin={{
          top: 20,
          right: 30,
          left: 50,
          bottom: 20,
        }}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="activity"
          tickLine={true}
          tickMargin={10}
          fontSize={20}
          axisLine={true}
          tickFormatter={(value) => value}
        />
        <YAxis
          tickLine={true}
          axisLine={true}
          tickMargin={10}
          fontSize={16}
          fontWeight="bold"
        >
          <Label
            value="Duration (min)"
            angle={-90}
            position="left"
            style={{ textAnchor: "start", fontSize: 24, fontWeight: "bold" }}
          />
        </YAxis>
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar
          dataKey="totalMinutes"
          fill="var(--color-trainingHours)"
          radius={[8, 8, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  );
}