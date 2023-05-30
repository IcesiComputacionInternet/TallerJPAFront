import { useState } from "react";

function ListGroup() {
    const items = ["Colombia", "Peru", "Argentina", "Mexico", "Brasil"];
    const [selectedIndex, setSelectedIndex] = useState(0);

    const isSelected = function (index: number) {
        return index === selectedIndex
            ? "list-group-item active"
            : "list-group-item";
    };

    return (
        <>
            <h1>List Group</h1>
            <ul className="list-group">
                {items.map((item, index) => (  
                    <li 
                        key={item}
                        onClick={() => setSelectedIndex(index)} 
                        className={isSelected(index)}
                    > 
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;