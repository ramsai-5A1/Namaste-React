import Accordion from "./Accordion";

const RestaurantCategory = (props) => {
    const {obj, droppedDown, setShowIndex, index} = props;
    const {name} = obj?.menu || {};
    let {items} = obj?.menu?.categories[0]?.category || {};

    if (items == undefined) {
        items = [];
    }

    return (
        <div id={name} className="">
            <Accordion 
                name={name} 
                items={items} 
                droppedDown={droppedDown} 
                setShowIndex={setShowIndex}
                index={index}
            />
        </div>
    )
};


export default RestaurantCategory;