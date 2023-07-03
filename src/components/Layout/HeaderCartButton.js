import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import './HeaderCartButton.css'
import CartContext from "../../Store/cart-context";
const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfItems = cartCtx.item.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0)

    return (
        <button className="button" onClick={props.onClick} >
            <span className="icon">
                <CartIcon />
            </span>
            <span>your Cart</span>
            <span className="badge">{numberOfItems}</span>
        </button>
    );
}

export default HeaderCartButton;
