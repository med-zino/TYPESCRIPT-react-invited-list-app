import React from "react";

interface IProps {
    people : {
        name:string,
        age:number,
        url:string,
        note?:string,
    }[]
}

const List: React.FC<IProps> = ({people}) => {
    const renderList = ():JSX.Element []=> {
        return people.map((person) => {
            return(
            <li className='List'>
                <div className="List-header">
                    <img src={person.url} className='list-img' alt='' />
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className='List-note'>{person.note}</p>
            </li>
            )
        })
    }

    return (
    <div><h3>i am already showing</h3>
    {renderList()}
    </div> 
    )
}

export default List