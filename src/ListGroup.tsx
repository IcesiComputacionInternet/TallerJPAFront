import {useState} from 'react'
export default function ListGroup(){
    const items = ["Colombia","Brasil","Ecuador"];
    const [selectedItem, setSelectedItem] = useState(0);
    const isSelected= function(index: number){
        return selectedItem===index
        ? "list-group-item active"
        : "list-group-item";
    }

    return(
        <>
        <h1>List Group</h1>
        <ul className="list-group">
            {items.map((item,index) => (
                <li 
                key={item}
                onClick={(e)=> setSelectedItem(index)}
                className={isSelected(index)}
                >{item}
                </li>
            ))}
        </ul>
        </>
    )
}