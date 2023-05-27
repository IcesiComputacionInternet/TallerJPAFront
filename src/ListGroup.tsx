import { useState } from 'react';

export default function ListGroup(){
    const items = ["Colombia","Brasil","Ecuador","Bolivia","Venezuela"]
    const [selectedIndex, setSelectedIndex] = useState(0)

    const isSelected = function (index: number){
        return selectedIndex === index
        ? "list-group-item active"
        : "list-group-item"
    }
    return(
        <>
            <h1>List group</h1>
            <ul className="list-group">
                {
                    items.map((item, index) =>(
                        <li 
                        key = {item}
                        className={isSelected(index)}
                        onClick={(e) => setSelectedIndex(index)}
                        >
                            {item}
                        </li>
                    ))
                }
            </ul>
        
        </>
    )
}
