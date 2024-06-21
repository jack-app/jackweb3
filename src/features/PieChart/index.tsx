import React from "react";
import { PieChartDataType } from "./../../screens/Members/data";
import { renderCustomizedLabel } from "./hooks";
import { PieChartPresentation } from "./presentations/";

type Props = {
  data: PieChartDataType[];
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
};

export const PieChartComponent: React.FC<Props> = ({ data: pieChartData }) => {
  return (
    <PieChartPresentation
      data={pieChartData}
      customLabel={renderCustomizedLabel}
      cx={0}
      cy={0}
      midAngle={0}
      innerRadius={0}
      outerRadius={0}
      percent={0}
    />
  );
};
