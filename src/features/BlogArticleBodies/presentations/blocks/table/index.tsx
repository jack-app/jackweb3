import { Text } from "@/features/BlogArticleBodies/hooks/renderText";
import { Table, Block } from "@/types/block";
import styles from "./index.module.css";

type Props = {
  table?: Table;
  childBrocks?: Block[];
};

export const TablePresentation: React.FC<Props> = ({ table, childBrocks }) => {
  if (!table) return null;
  return (
    <table className={styles.table}>
      <tbody>
        {childBrocks?.map((child: any, i: number) => {
          const RowElement = table.has_column_header && i == 0 ? "th" : "td";
          return (
            <tr key={child.id}>
              {child.table_row?.cells?.map((cell: any, i: number) => {
                return (
                  <RowElement key={`${cell.plain_text}-${i}`}>
                    <Text text={cell} />
                  </RowElement>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
