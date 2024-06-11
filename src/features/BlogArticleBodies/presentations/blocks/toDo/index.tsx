import { ToDo } from "@/types/block";
import { Text } from "@/utils/renderText/renderText";

type Props = {
  todo?: ToDo;
  id: string;
};

export const ToDoPresentation: React.FC<Props> = ({ todo, id }) => {
  if (!todo) return null;
  return (
    <div>
      <label htmlFor={id}>
        <input type="checkbox" id={id} defaultChecked={todo.checked} />{" "}
        <Text richText={todo.rich_text} />
      </label>
    </div>
  );
};
