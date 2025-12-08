import { useNavigate } from "react-router-dom";
export function TaskCard({ task }) {
  const navigate = useNavigate();
  return (
    <div
      style={{ background: "#202020", color: "#ffffff" }}
      onClick={() => {
        navigate("/tasks/" + task.id);
      }}
    >
      <hr />
      <h1>{task.title}</h1>
      <p>{task.description}</p>
    </div>
  );
}

export default TaskCard;
