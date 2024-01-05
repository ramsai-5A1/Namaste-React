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
            <div className="flex justify-between w-6/12 mx-auto p-4 my-4 shadow-lg hover:cursor-pointer  bg-green-300 rounded-sm" onClick={() => toggleFlag()}>
                <span className="font-bold text-lg">{name}{" ("}{items.length}{")"}</span>
                <span>⬇️</span>
            </div>

            {droppedDown && (
                <div className="w-6/12 mx-auto bg-green-100">
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
