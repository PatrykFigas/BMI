import React, { useState } from 'react';
import './App.css';

function App()
{
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');

     

    const calculateBMI = () =>
    {
        if (!weight || !height || isNaN(weight) || isNaN(height))
        {
            alert('Please provide valid values for weight and height.');
            return;
        }

        const heightInMeters = height / 100;
        const bmiValue = weight / (heightInMeters * heightInMeters);

        setBmi(bmiValue.toFixed(2));

        if (bmiValue < 18.5)
        {
            setCategory('Underweight');
        }
        else if (bmiValue >= 18.5 && bmiValue < 24.9)
        {
            setCategory('Normal weight');
        }
        else if (bmiValue >= 25 && bmiValue < 29.9)
        {
            setCategory('Overweight');
        }
        else
        {
            setCategory('Obesity');
        }
    };

    return (
        <div className="App">
            <h1>BMI Calculator</h1>

            <div>
                <label>
                    Weight (kg):
                    <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Enter weight"
                    />
                </label>
            </div>

            <div>
                <label>
                    Height (cm):
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="Enter height"
                    />
                </label>
            </div>

            <div>
                <button onClick={calculateBMI}>Calculate BMI</button>
            </div>

            {bmi && (
                <div>
                    <h2>Your BMI: {bmi}</h2>
                    <h3>Category: {category}</h3>
                </div>
            )}
        </div>
    );
}

export default App;