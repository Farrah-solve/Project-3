import React from 'react';
import axios from 'axios';

function Budget() {
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
            const newNote = {
                title: input.title,
                content: input.content
            }
            axios.post('http://localhost:3001/notes', newNote)
        }




    return <div className='container'>
        <h1>Track your budget here</h1>
        <form>
        
            <div className='wrapper'>
                <div class='total'>
                <div class='total'>Your total is: $<span id='total'>0</span></div>
                </div>

                <div class='form'>
                <input type='text' id='t-name' placeholder='Name of transaction' />
                <input type='number' min='0' id='t-amount' placeholder='Transaction amount' />
                <button id='add-btn'><i class='fa fa-plus buttons'></i> Add Funds</button>
                <button id='sub-btn'><i class='fa fa-minus'></i> Subtract Funds</button>
                <p class='error'></p>
                </div>

                <div class='transactions'>
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