import { useState } from "react";


const AddTask = ({onAdd}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onsubmit = (e) =>{
        e.preventDefault()
        if(!text){
            alert('please add a task')
            return false;
        }
        onAdd({text, day, reminder})
        setDay('')
        setText('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onsubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add 
                Task' value={text} onChange={(e) =>setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' value={day} onChange={(e) =>setDay(e.target.value)} placeholder='Add 
                Day & time' />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' 
                checked='reminder'
                value={reminder} onChange={(e) =>setReminder(e.currentTarget.checked)} />
            </div>
            <input type='submit' className='btn btn-block' value='Save Task' />
            
        </form>
    )
}

export default AddTask
