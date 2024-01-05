import Accordion from "./Accordion";

const RestaurantCategory = (props) => {
    const {obj} = props;
    const {name} = obj?.menu || {};
    let {items} = obj?.menu?.categories[0]?.category || {};
    console.log("Items");
    console.log(items);

    if (items == undefined) {
        items = [];
    }

    return (
        <div className="p-10 ">
            <Accordion name={name} items={items}/>
        </div>
    )
};


export default RestaurantCategory;