import React from "react";
import { PieChartDataType } from "./../../screens/Members/data";
import { renderCustomizedLabel } from "./hooks";
import { PieChartPresentation } from "./presentations/";

type Props = {
  data: PieChartDataType[];
};

export const PieChartComponent: React.FC<Props> = ({ data: pieChartData }) => {
  return <PieChartPresentation data={pieChartData} customLabel={renderCustomizedLabel} />;
};
