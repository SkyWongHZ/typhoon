import React from 'react';
import {Button} from 'antd';
import myImage  from   '@/assets/images/demo.jpg' 


const HomePage: React.FC = () => {
  return (
    <div>
        <div>这是detail页面</div> 
        <Button type="primary">Primary Button</Button>
        <div>
          <img src={myImage} alt="" width={500}/>
        </div>
    </div>
  );
};

export default HomePage;

