import React from 'react';
import {Button} from 'antd';
import  style  from   './index.less'

const HomePage: React.FC = () => {
  return (
    <div>
        <div className={style.red}>这是detail页面</div> 
        <Button type="primary">Primary Button</Button>
    </div>
  );
};

export default HomePage;