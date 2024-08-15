import React, { useState } from 'react';

function Counter() {
    // 定义两个独立的状态变量
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleIncrement = () => {
        // 连续更新两个状态
        setCount1(count1 + 1);
        setCount2(count2 + 1);
    };

    return (
        <div>
            <p>Counter 1: {count1}</p>
            <p>Counter 2: {count2}</p>
            <button onClick={handleIncrement}>Increment Both Counters</button>
        </div>
    );
}

export default Counter;