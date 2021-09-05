import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const AddTodo = ({addEvent}) => {

    const [title, setTitle] = useState('');

    const onChangeTitle = event => {
        setTitle(event.target.value);
    }

    const addForm = event => {
        event.preventDefault();
        addEvent({
            id: uuidv4(),
            title
        });
        setTitle('');
    }

    return (
        <form onSubmit={addForm}>
            <input type='text' name='title' placeholder='Enter a new Title....' value={title} onChange={onChangeTitle} required/>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default AddTodo
