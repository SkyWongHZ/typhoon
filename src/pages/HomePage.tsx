import React from 'react';
import   './index.less'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();  // 获取 navigate 函数
  const skip = () => { 
    navigate('/details');
   }
  return (
    <div className='homePage'>
      <p className="font">主页</p>
      <Button type="link" onClick={skip}>跳转详情</Button>
      <h1>Welcome to the Home Page!</h1>
    </div>
  );
};

export default HomePage;