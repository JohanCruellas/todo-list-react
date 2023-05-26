import React,{useState} from "react"
import { useNavigate } from 'react-router-dom';


function addTaskForm({onSubmit}){
    const [addTask, setaddTask] = useState('')
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(addTask)
        setaddTask('')
        navigate('/');
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type={'text'}
                    placeholder={'Ajouter une tâche'}
                    value={addTask}
                    onChange={(e) => setaddTask(e.target.value)}
                />
                <button role={'submit'}>Enregistrer</button>
            </form>
            
        </div>
    )
}

export default addTaskForm;