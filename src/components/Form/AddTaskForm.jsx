import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';

function addTaskForm({ onSubmit }) {
    const [addTask, setaddTask] = useState('')
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault()
        setShowError(false)
        if (addTask !== '') {
            onSubmit(addTask)
            setaddTask('')
            navigate('/');
        } else {
            setShowError(true)
        }
    }
    return (
        <div className="task-form-wrapper">
            <form className="task-form"
                onSubmit={handleSubmit}>
                <input
                    type={'text'}
                    placeholder={'Ajouter une tâche'}
                    value={addTask}
                    onChange={(e) => setaddTask(e.target.value)}
                />
                {showError ? <div className='error-msg'>Veuillez entrer une tâche</div> : null}
                <button
                    className="task-save-btn"
                    role={'submit'}>Enregistrer</button>
            </form>
        </div>
    )
}

export default addTaskForm;