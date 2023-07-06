import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import './MealItemForm.css'
const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    const submitHandler = event => {
        event.preventDefault();

        const entredAmount = amountInputRef.current.value;
        const entredAmountNumber = +entredAmount;

        if (entredAmount.trim().length === 0 || entredAmountNumber < 1 || entredAmountNumber > 5) {
            setAmountIsValid(false)
            return;
        }

        props.onAddToCart(entredAmountNumber)
    }

    return (
        <form className='form' onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label='Amount'
                input={{
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount</p>}
        </form>
    );
}

export default MealItemForm;
