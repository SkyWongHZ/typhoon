import React from 'react';
import  styles  from   './index.less'
import './index.less'

const HomePage: React.FC = () => {
  console.log('stylesxx',styles);
  return (
    <div>
      <p className="red">主页</p>
      <h1>Welcome to the Home Page!</h1>
    </div>
  );
};

export default HomePage;