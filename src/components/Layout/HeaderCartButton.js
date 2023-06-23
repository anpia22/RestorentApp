import CartIcon from "../Cart/CartIcon";
import './HeaderCartButton.css'
const HeaderCartButton = (props) => {
    return ( 
        <button className="button">
            <span className="icon">
                <CartIcon />
            </span>
            <span>your Cart</span>
            <span className="badge">0</span>
        </button>
     );
}
 
export default HeaderCartButton;