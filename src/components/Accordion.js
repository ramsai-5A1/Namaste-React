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
            <div className="border hover:bg-green-400  flex justify-between w-6/12 mx-auto p-4 my-4 shadow-lg hover:cursor-pointer  bg-green-300 rounded-sm" onClick={() => toggleFlag()}>
                <span className="font-bold text-lg">{name} ({items.length})</span>
                <span>⬇️</span>
            </div>

            {droppedDown && <ItemList items={items}/> }

        </div>
    )
}

const ItemList = ({items}) => {
    return (
        <div className="bg-green-100 w-6/12 mx-auto">
            {items.map((value) => {
                return (
                    <div id={value.item.id} className="hover:bg-green-300 flex flex-row-reverse justify-between border border-b-4 border-gray-400 text-left">
                        <div className="w-3/12 h-auto flex flex-col justify-between rounded-2xl p-2">
                            <img className="m-1" src={value.item.item_image_url}/>
                            <div className=" hover:bg-gray-200 hover:text-black rounded-lg p-1 w-16 h-8 bg-black text-white text-center">
                                <button onClick={() => alert("Added to the cart")} className="">Add</button>
                            </div>
                        </div>

                        <div className="w-9/12">
                            <div className="py-2">
                                <span className="font-bold">{value.item.name}</span>
                                <span className="py-3"> - ₹{value.item.min_price} /-</span>
                            </div>

                            <p className="text-xs">{value.item.desc}</p>
                        </div>

                        
                    </div>
                    )
            })}
        </div>
    )
}

export default Accordion;
