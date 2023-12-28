
const Restracard = (props) => {
    const {title, category, image, price, description, rating} = props.dataObj;

    return (
        <div className="rest-card">
            <img 
                className="rest-logo"
                alt="rest-logo"
                src={image}
            />
            <h3>{title}</h3>
            <h4>{category}</h4>
            <h4>{price}/- INR</h4>
            <h3>{rating.rate} stars</h3>
        </div>
    );
};

export default Restracard;