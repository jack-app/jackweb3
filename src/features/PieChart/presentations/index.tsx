import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { PieChartDataType } from "../../../screens/Members/data";
import { COLORS } from "../hooks";

type Props = {
  data: PieChartDataType[];
  customLabel: (props: Props) => JSX.Element;
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  name?: string;
};

export const PieChartPresentation: React.FC<Props> = ({ data, customLabel }) => {
  return (
    <ResponsiveContainer width={300} height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
          labelLine={false}
          label={customLabel}
          fill="#8884d8"
          isAnimationActive={false}
        >
          {data.map((_entry, index) => {
            // データが2つの場合、COLORS配列の後ろ2つの色を使用
            const colorIndex =
              data.length === 2 ? (index % COLORS.length) + 1 : index % COLORS.length;
            return <Cell key={`cell-${index}`} fill={COLORS[colorIndex]} />;
          })}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export { PieChart };
