import React, { useState } from 'react';
import axios from '@/utils/axios';
import { Link } from 'react-router-dom';
// import axios from   'fadeaway-axios';

import { Button, Space } from 'antd';
import { countStore } from '@/store';



function Counter() {
  const count = countStore((state: any) => state.count)
  return <h1>{count} around here ...</h1>
}

const Controller = () => {
  const count = countStore((state: any) => state.count)

  const increasePopulation = countStore((state: any) => state.increasePopulation)
  const removeAllCount = countStore((state: any) => state.removeAllCount)

  return (
    <Space size="large">
      <Button type="primary" onClick={increasePopulation}>one up</Button>
      {count > 0 && <Button type="primary" danger onClick={removeAllCount}>clear</Button>}
    </Space>
  )

}


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

    axios.get('/qianqian_music.php', { params: { msg1: '张杰', n: 1 }, signal })
      .then(response => {

      })
      .catch(error => {

      });

    //  axios.get('/api/v1/tags',{params:{}})
    //   .then(response => {
    //     
    //   })
    //   .catch(error => {
    //     
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

      <>
        <Counter />
        <Controller />
      </>
    </div>
  );
}

export default App;