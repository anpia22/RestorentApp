import './Cart.css'
import Modal from '../UI/Modal';

// import { Fragment } from "react";

// const Cart = (props) => {
//     const cartItems = (<ul className='cart-items'>
//         {
//             [{ id: 'm1', name: 'Sushi', amount: 2, price: 22.99, },].map((item) => (<li>{item.name}</li>))
//         }
//     </ul>);
//     return (
//         <Modal onClose={props.onClose} >
//             {cartItems}
//             <div className='total'>
//                 <span>Total Amount</span>
//                 <span>35.22</span>
//             </div>
//             <div className='actions'>
//                 <button className='buttonAlt' onClick={props.onClose}>Close</button>
//                 <button className='button'>Order</button>
//             </div>
//         </Modal>
//     );
// }

// export default Cart;


const Cart = () => {
    const cartItem = (<ul>
        {[{id: 'm1', name: 'Sushi', amount: 2, price: 22.99, }].map((item)=>(<li>{item.name}</li>))}
    </ul>)
    return ( <Modal>
        {cartItem}
        <div className="total">
            <span>Total Amount</span>
            <span>35.22</span>
        </div>
        <div className="actions">
            <button className="buttonAlt">Close</button>
            <button className="button">Order</button>
        </div>
    </Modal> );
}
 
export default Cart;