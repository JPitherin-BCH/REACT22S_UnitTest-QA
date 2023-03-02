import { useState } from 'react';

export default function Dice () {
    const [size, setSize] = useState(6);    
    const [result, setResult] = useState(0);
    const [rolled, setRolled] = useState(false);

    const testInput = () => {
        if (!Number.isInteger(size)) {
            throw new Error('die size must be an integer');
        }
        else if(size>=20){
            throw new Error('die size too big');
        }
        else if(size<2){
            throw new Error('die size too small');
        }
    };

    if (rolled === true) {
        try {
           testInput();

           setResult(Math.ceil(Math.random()*size));
            setRolled(false); 
        } catch (error) {
            console.error(error);
        }; 
    };

    return (
        <div className='Component'>
            <h1>Dice</h1>
            <label>Input die size (2 to 20):
                <input 
                    type="number" 
                    min="2"
                    max="20"
                    value={size}
                    onChange={(e) => setSize(parseInt(e.target.value))}
                />
            </label>
            <button className='button' onClick={() => setRolled(true)}>Roll</button>
            <div>
                <h4>Die Size: {size}</h4>
                <h4>Result: {result}</h4>
            </div>     
        </div>
    );

  }