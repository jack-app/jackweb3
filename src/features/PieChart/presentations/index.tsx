import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import styles from "./index.module.scss";
import { PieChartDataType } from "../hooks/data";

const COLORS = ["#FB8700", "#FFA61F", "#FFE766"];

const RADIAN = Math.PI / 180;

type Props = {
  data: PieChartDataType[];
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  name?: string;
};

export const PieChartPresentation: React.FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width={300} height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
          labelLine={false}
          label={renderCustomizedLabel}
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

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name,
}: Props) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <>
      <text x={x - 7} y={y + 10} className={styles.piechart_text}>
        {`${(percent * 100).toFixed(0)}%`}
      </text>
      <text x={x - 10} y={y - 10} className={styles.piechart_text}>
        {name}
      </text>
    </>
  );
};

export { PieChart };
