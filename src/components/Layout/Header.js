import { Fragment } from "react";
import './Header.modules.css'
import meals from '../../Images/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";
import LittleSummary from "./LittleSummary";
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
            <LittleSummary/>
        </Fragment>
    );
}

export default Header;
