
const RestaurantCategory = (props) => {
    const {obj} = props;
    const {name} = obj?.menu || {};
    let {items} = obj?.menu?.categories[0]?.category || {};
    console.log("Items");
    console.log(items);

    if (items == undefined) {
        items = [];
    }

    //const {name} = menu?.menu?.name;
    //const {category} = menu?.menu?.categories[0];
    //console.log(name);
    return (
        <div className="p-10">
            <h1 className="underline">{name}</h1>
            <ul>
                {items.map((value) => (
                    <li>{value.item.name} - {"Rs"} {value.item.price > 0 ? value.item.price : value.item.min_price}</li>
                ))}
            </ul>
            
        </div>
    )
};

export default RestaurantCategory;