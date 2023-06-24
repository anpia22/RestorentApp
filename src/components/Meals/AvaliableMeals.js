import './AvaliableMeals.css'
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvaliableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meals => <li> <h4>{meals.name}</h4>  <i>{meals.description}</i>  <span className='price'>${meals.price}</span></li>))
    return (
        <section className="meals">
            <ul>{mealsList}</ul>
        </section>
    );
}

export default AvaliableMeals;
