import { Fragment } from "react";
import './Header.modules.css'
import meals from '../../Images/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
    return (
        <Fragment>
            <header className='header'>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className='main-image'>
                <img src={meals} alt="A table full of Meals" />
            </div>
        </Fragment>
    );
}

export default Header;
