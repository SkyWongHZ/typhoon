import React, { useState } from 'react';
import axios from '@/utils/axios';
import { Link } from 'react-router-dom';
// import axios from   'fadeaway-axios';


function Counter() {
  // 定义两个独立的状态变量
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncrement = () => {
    // 连续更新两个状态
    setCount1(count1 + 1);
    setCount2(count2 + 1);
  };

  const getRequest=()=>{
    const  controller = new AbortController();
    const signal=controller.signal; 

    axios.get('/qianqian_music.php',{params:{msg1:'张杰',n:1},signal})
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    //  axios.get('/api/v1/tags',{params:{}})
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });

  };   
    

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
    </div>
  );
}

export default Counter;