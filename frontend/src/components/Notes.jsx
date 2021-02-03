import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Notes() {
    const [input, setInput] = useState({
        title: '',
        content: ''
    })

    useEffect(() => {
        fetch("/notes").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => Notes(jsonRes));
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        const newNote = {
            title: input.title,
            content: input.content
        }
        axios.post('http://localhost:3001/notes', newNote)
    }

    return <div className='container'>
        <h1>Keep Notes Here</h1>
        <form>
            <div className='form-group'>
                <input onChange={handleChange} name='title' value={input.title} autoComplete='off' className='form-control' placeholder='title'></input>
            </div>

            <div className='form-group'>
                <textarea onChange={handleChange} name='content' value={input.content} autoComplete='off' className='form-control' placeholder='note'></textarea>
            </div>

            <button onClick={handleClick} className='btn btn-lg btn-info'>ADD NOTE</button>
        </form>
        {/* {Notes.map(note => 
        <div>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
        </div>
            )} */}


    </div>
}



export default Notes;