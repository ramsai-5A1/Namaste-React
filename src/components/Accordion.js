import { ToastContainer, toast } from "react-toastify";
import {addItem} from "../../utils/CartSlice";
import { useDispatch, useSelector } from 'react-redux';
import "react-toastify/dist/ReactToastify.css";

// toast.configure();

const Accordion = ({name, items, droppedDown, setShowIndex, index}) => {
    let opened = false;
    if (name === undefined || items.length === 0) {
        return (
            <div>
                
            </div>
        )
    }

    const toggleFlag = () => {
        if (!opened) {
            setShowIndex(index);
        } else {
            setShowIndex(-1);
        }
        opened = !opened;
    }

    return (
        <div id={name} className="">
            <div className="border hover:bg-white hover:text-black bg-gray-400 flex justify-between w-6/12 mx-auto p-4 my-4 shadow-lg hover:cursor-pointer rounded-sm" onClick={() => toggleFlag()}>
                <span className="font-bold text-lg">{name} ({items.length})</span>
                <span>⬇️</span>
            </div>

            {droppedDown && <ItemList items={items}/> }

        </div>
    )
}

export const ItemList = ({items}) => {
    const dispatch = useDispatch();

    const addItemToCart = (value) => {
        dispatch(addItem(value));
        //toast(value.item.name + " added to cart");
         //const cartItems = useSelector(store => store.cart.items);
        // console.log(cartItems);
    }

    return (
        <div className="bg-gray-200 w-6/12 mx-auto">
            {items.map((value) => {
                return (
                    <div id={value.item.id} className="hover:bg-white p-2 flex flex-row-reverse justify-between border border-b-4 border-gray-400 text-left">
                        <div className="w-3/12 h-auto flex flex-col-reverse justify-between rounded-2xl p-2">
                            <img className="m-1 shadow-lg" src={value.item.item_image_url}/>
                            <div className="mx-12 shadow-lg absolute hover:bg-black hover:text-white rounded-lg p-1 w-16 h-8 bg-white text-black text-center">
                                <button onClick={() => addItemToCart(value)} className="">Add +</button>
                                <ToastContainer />
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
