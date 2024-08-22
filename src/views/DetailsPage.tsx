import React from 'react';
import {Button} from 'antd';
import myImage  from   '@/assets/images/demo.jpg'; 
import AdminLoginIcon from '@/assets/images/icons/AdminLoginIcon.svg';


const HomePage: React.FC = () => {


  return (
    <div>
      <div className='font'>这是detail页面</div> 
      <Button type="primary">Primary Button</Button>
      <div>
        <img src={myImage} alt="" width={500}/>
        <img src={AdminLoginIcon}/>
        <i className="icon icon-qushi"></i>
      </div>
    </div>
  );
};

export default HomePage;

