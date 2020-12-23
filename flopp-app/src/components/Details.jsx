import { itemData } from "../data";
import { useParams } from "react-router-dom";

function Details() {
    
    const { itemId } = useParams();
    return(
        <div className="details">
            <p>Item Details</p>

            {itemData.filter(item => item.id === Number(itemId)).map((item, key) => {
                return (
                    <div key={key}>
                        {"Item Name: " + item.name +
                        " Item Price: $" + item.price + 
                        " Sold At: " + item.merchant_name + 
                        " Item Category: " + item.category + 
                        " Item Sub-Category" + item.sub_category}
                    </div>
                );
            })}
        </div>
    );
}
export default Details;