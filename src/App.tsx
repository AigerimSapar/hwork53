
import './App.css';
import './AddTaskForm';
import './Task';

interface Task {
   id: string;
   text: string;
}

const App: React.FC  = () => {
    const [tasks, setTasks] = useState<Task[]> ([
        {id: }
    ])
    return (
        <div>

        </div>
    );
};

export default App;
