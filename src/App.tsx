import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


// 导入你的页面组件
import HomePage from './views/HomePage';
import DetailsPage from './views/DetailsPage';
import NotFoundPage from './views/NotFoundPage';
import './index.less';

const App: React.FC = () => {
  return ( 
    <Router>
      <div>

        {/* 可以放置一些全局导航链接 */}
        <nav>
          <Link to="/">Home</Link> | <Link to="/details">Details</Link>
        </nav>
        {/* <div className='font'>hello  world</div> */}
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