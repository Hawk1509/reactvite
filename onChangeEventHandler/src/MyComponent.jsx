import { useState } from "react";

function MyComponent(){
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment,setPayment] = useState("");
    const[shipping, setShipping] = useState("");

    function handleNameChange(e){
        setName(e.target.value);
    }

    function handleQuantityChange(e){
        setQuantity(e.target.value);
    }

    function handleCommentChange (e) {
        setComment(e.target.value);
    }

    function handlePaymentChange (e) {
        setPayment(e.target.value);
    }

    function handleShippingChange (e) {
        setShipping(e.target.value);
    }

    return(<div>
        <p>Name: {name}</p>
        <input value={name} onChange={handleNameChange}/>
        
        <p>Quantity: {quantity}</p>
        <input value={quantity} onChange={handleQuantityChange} type="number"/>        

        <p>Comment {comment}</p>
        <textarea value={comment} onChange={(handleCommentChange)}
        placeholder="Please enter delivery instructions" />

        <p>Payment Methods</p>
        <select value = {payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Giftcard">GiftCard</option>
            </select>
            <p>Payment: {payment}</p>

        <p>Shipping </p>
        <label>
            <input type="radio" value = "Pick Up"
                    checked = {shipping === "Pick Up"}
                    onChange={handleShippingChange}/>
            Pick-up
        </label><br/>
        
        <label>
        <input type="radio" value = "Delivery"
                    checked = {shipping === "Delivery"}
                    onChange={handleShippingChange}/>
            Delivery
        </label>
       <p>Shipping: {shipping}</p>
    </div>);
    
}
export default MyComponent;