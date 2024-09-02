import React, { useState } from 'react';
import axios from '@/utils/axios';
import { Link } from 'react-router-dom';
// import axios from   'fadeaway-axios';

import { Button, Space } from 'antd';
import { countStore } from '@/store';



function App() {
  // 定义两个独立的状态变量
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncrement = () => {
    // 连续更新两个状态
    setCount1(count1 + 1);
    setCount2(count2 + 1);
  };

  const getRequest = () => {
    const controller = new AbortController();
    const signal = controller.signal;

    axios.get('/api/v1/user',{ })
      .then(response => {

      })
    

  };   

  const getPostRequest=()=>{
    axios.post('/api/v1/user',{
      username:'小三',
      email:'12@gmail.com',
      password:`12345678`,
    })
      .then(response => {
        console.log(response.data);
      })
    
  
  }
    

  return (
    <div>
      <div>
        这是一个home页面
      </div>
      <Link to='/details'>Go to  detail</Link>
      <p>Counter 1: {count1}</p>
      <p>Counter 2: {count2}</p>
      <button onClick={handleIncrement}>Increment Both Counters</button>
      <button onClick={getRequest}>get请求</button>
      <button onClick={getPostRequest}>post请求</button>
    </div>
  );
}

export default App;