import { useState } from "react";

function ListGroup(){
    const itmes= ["Colombia", "brasil", "Ecuador", "Bolovia", "Venezuela"]
    const [selectedIndex, setSelectedIndex] = useState(0);

    const isSelected = (index: number) => {
        return index === selectedIndex
        ? "list-group-item active"
        : "list-group-item";
    };

    return(
        <>
            <h1>ListGroup</h1>
            <ul className="list-group">
                {itmes.map((item, index) => (
                    <li key={index} onClick={(e)=>setSelectedIndex(index)} className={isSelected(index)}>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;