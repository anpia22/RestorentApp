import cartimg from './Images/pngwing.com.png';
import headerimg from './Images/healthyfactor-meals.jpg';
import './App.css';
function App() {
  return (
    <div>
      <div className='header'>
        <h2>ReactMeals</h2>
        <div className='cart-section'>
          <img src={cartimg} alt='cart'/>
          Your cart
          <span>0</span>
        </div>
      </div>
      <img className='header-img' src={headerimg} alt='header-img'/>
    </div>
  );
}

export default App;
