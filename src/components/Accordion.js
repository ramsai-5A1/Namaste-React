import { useState } from "react";

const Accordion = ({name, items}) => {

    if (name === undefined || items.length === 0) {
        return (
            <div>
                
            </div>
        )
    }
    const [droppedDown, setDroppedDown] = useState(false);

    const toggleFlag = () => {
        if (droppedDown) {
            setDroppedDown(false);
        } else {
            setDroppedDown(true);
        }
    }

    return (
        <div className="">
            <div className="p-10 hover:cursor-pointer h-10 m-1 bg-green-300 rounded-sm" onClick={() => toggleFlag()}>
                <span>{name}</span>
            </div>

            {droppedDown && (
                <div className="bg-green-100">
                    <ul>
                        {items.map((value) => (
                            <li>{value.item.name} - {"Rs"} {value.item.price > 0 ? value.item.price : value.item.min_price}</li>
                        ))}
                    </ul>
                </div>
            )}

        </div>
    )
}

export default Accordion;
