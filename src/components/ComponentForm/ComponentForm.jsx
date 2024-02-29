import Button from "../Button/Button"; 
import { useState } from 'react';
import './ComponentForm.scss'

export default function ControlledForm(){

    const [form, setForm] = useState({
        name:'',
        hasError: true,
    });

function handleNameChange(e){
    setForm((prev) => ({
        ...prev, 
        name: e.target.value, 
        hasError: e.target.value.trim().length ===0
    }))  
}

return(
<section>
        <h3>Homework62 Sass</h3>
        <form action="#">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="field-input" value={form.name} style={{border:form.hasError?"1px solid red":null,}} onChange={handleNameChange}/>
            <Button disabled={form.hasError} isActive={!form.hasError}>Відправити</Button>
        </form>
</section>
)
}
