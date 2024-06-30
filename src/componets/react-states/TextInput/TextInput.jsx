import React, { useState } from 'react'

function TextInput(){
    const [text, setText] = useState('')

    const handleChange = (event)=>{
        setText(event.target.value);
    }
    return(
        <div>
        <input type="text" value={text} onChange={handleChange}/>
        <p>You Typed: {text}</p>
        </div>
    )
}
export default TextInput;
