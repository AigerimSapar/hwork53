import React from 'react';
import './AddTaskForm.css';

interface AddTaskFormProps {
    addTask: string;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ( {addTask}) => {

    const [task, setTask] = useState('');

    const handleInputChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
      setTask (e.target.value);
    };

    const handleAddTask = () => {
      if(task) {
          addTask(task);
          setTask('');
      }
    };

    return (
        <div>
        <input
        type="text"
        value ={task}
        onChange={handleInputChange}
        placeholder="Task name"
        id="input"
        />

            <button type="button"  onClick={handleAddTask} id="btn">
                Add
            </button>

        </div>

    );
};

export default AddTaskForm;