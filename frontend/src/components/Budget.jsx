import React, {useEffect, useState} from 'react';
import axios from 'axios';


    function Budget() {
        const [input, setInput] = useState({
            transaction: ''
        
        })
        function handleChange(event) {
            const {name, value} = event.target;
    
            setInput(prevInput => {
                return {
                    ...prevInput,
                    [name]: value
                }
            })
        }
    
        function handleClick(event) {
            event.preventDefault();
            const newBudget = {
                tName: input.title,
                transaction: input.transaction,
                tAmount: input.amount,
                total: input.total
            }
            axios.post('http://localhost:3001/notes', newBudget)
        }




    return <div className='container'>
        <h1>Track your budget here</h1>
        <form>
        
            <div className='wrapper'>
                <div className='total'>
                <div className='total'>Your total is: $<span id='total'>0</span></div>
                </div>

                <div className='form'>
                <input type='text' id='tName' placeholder='Name of transaction' />
                <input type='number' min='0' id='tAmount' placeholder='Transaction amount' />
                <button id='add-btn'><i className='fa fa-plus buttons'></i> Add Funds</button>
                <button id='sub-btn'><i className='fa fa-minus'></i> Subtract Funds</button>
                <p className='error'></p>
                </div>

                <div className='transactions'>
                <table>
                    <thead>
                    <th>Transaction</th>
                    <th>Amount</th>
                    </thead>
                    <tbody id='tbody'>
                    
                    </tbody>
                </table>
                </div>
                
                <canvas id='myChart'></canvas>
            </div>
        </form>


    </div>
}

export default Budget;