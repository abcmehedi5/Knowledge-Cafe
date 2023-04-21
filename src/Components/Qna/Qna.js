import React from 'react';
import './Qna.css'
const Qna = () => {
    return (
        <div>
            <h1>QNA</h1>
            <h3>1. What is the difference between props and state?</h3>
            <p><strong>ANS</strong>: The value of props can never be changed . But the value of State can be changed. <br />
            And send props when calling a component. And the state component works in between </p>

            <h3>2. How usestate works?</h3>
            <p><strong>ANS</strong>: useState returns 2 values and these 2 values are returned as an array type that contains 2 elements.</p>

            <h3>3. What does useEffect do other than load data?</h3>
            <p><strong>ANS</strong>: useEffect does more than load data. If any state changes, we use useEffect to call any data</p>
            
            <h3>4. How React works</h3>
            <p><strong>ANS</strong>: ReactJS is a flexible, declarative and efficient JavaScript library. It is a component-based <br /> front-end library that can be used to create just one application's view layer.</p>
        </div>
    );
};

export default Qna;