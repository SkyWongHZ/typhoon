import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
// import 'antd/dist/antd.css'; 

// 导入你的页面组件
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import NotFoundPage from './pages/NotFoundPage';

import  styles  from'./index.module.less';

const App: React.FC = () => {
  console.log(  'styles123',styles);
  return ( 
    <Router>
      <div>

        {/* 可以放置一些全局导航链接 */}
        <nav>
          <Link to="/">Home</Link> | <Link to="/details">Details</Link>
        </nav>
        <div className={styles.red}>1111</div>
        {/* 路由配置 */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;