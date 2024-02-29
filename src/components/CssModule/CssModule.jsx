import { useState } from 'react';
import styles from './CssModule.module.css';

export default function CssModule(){

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
        <h3>Homework63 Css module</h3>
        <form action="#">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className={`${styles.field}`} value={form.name} style={{border:form.hasError?"1px solid red":null,}} onChange={handleNameChange}/>
            <button className={`${styles.btn}`}>Відправити</button>
        </form>
</section>
)
}
