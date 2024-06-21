import { PieChartDataType } from "./../../../screens/Members/data";
import styles from "./../presentations/index.module.scss";

export const COLORS = ["#FB8700", "#FFA61F", "#FFE766"];

const RADIAN = Math.PI / 180;

type Props = {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  name: string;
};

export const renderCustomizedLabel = ({
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
