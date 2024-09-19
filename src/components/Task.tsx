
import './Task.css';

interface Task {
    id: string,
    text: string,
}

interface TaskProps {
    task: Task;
    removeTask: (id:string) => null;
}

const Task: React.FC<TaskProps> = ({task, removeTask }) => {
    return (
        <div id="task-item">
            <span id ="task-text">{task.text}</span>
            <button
                type="button"
                onClick = {() => removeTask(task.id)}
                id= "delete_btn"
            >
                Delete
            </button>
        </div>
    );
};

export default Task;