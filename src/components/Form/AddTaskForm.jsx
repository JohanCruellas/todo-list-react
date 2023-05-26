import React,{useState} from "react"

function addTaskForm({onSubmit}){
    const [addTask, setaddTask] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(addTask)
        setaddTask('')
    }
    return(
        <div className="task-form-wrapper">
            <form className="task-form"
             onSubmit={handleSubmit}>
                <input
                    type={'text'}
                    placeholder={'Ajouter une tâche'}
                    value={addTask}
                    onChange={(e) => setaddTask(e.target.value)}
                />
                <button
                className="task-save-btn"
                 role={'submit'}>Enregistrer</button>
            </form>
            
        </div>
    )
}

export default addTaskForm;