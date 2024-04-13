import { Text } from "@/features/BlogArticleBodies/hooks/renderText";
import { ToDo } from "@/types/block";

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
        <Text text={todo.rich_text} />
      </label>
    </div>
  );
};
