import React, { ChangeEvent, useState } from "react";
import {IState as Props} from "../App" 


interface IProps {
    people : Props['people']
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const AddToList: React.FC<IProps> = ({people , setPeople}) => {


    const [input , setInput] = useState({
        name:'',
        age:'',
        image:'',
        note:''
    })

    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }


    const handleClick =(): void=> {
        if (!input.name || 
            !input.age ||
            !input.image
            )
            {
                return
            }
            setPeople ([
                ...people,
                {
                    name:input.name,
                    age:parseInt(input.age),
                    url:input.image,
                    note:input.note
                }
            ])
            setInput ({
                name:'',
                age:'',
                image:'',
                note:''
            })
    }

    return(
        <div className="AddToList">
            <h1>add new Item</h1>
            <input 
            type="text"
            placeholder='name'
            name='name'
            className='AddToList-input'
            value={input.name}
            onChange={handleChange}
            
             />
             <input 
            type="text"
            placeholder='age'
            className='AddToList-input'
            value={input.age}
            name='age'
            onChange={handleChange}
             />
             <input 
            type="text"
            placeholder='image'
            className='AddToList-input'
            value={input.image}
            name='image'
            onChange={handleChange}
             />
             <textarea 
            placeholder='note'
            className='AddToList-input'
            value={input.note}
            name='note'
            onChange={handleChange}
             />

             <button 
             className='AddToList-btn'
             onClick={handleClick}
             >
                 Add to list
             </button>
        </div>
        
    )
}
export default AddToList