import React from 'react';
import AppRoutes from './routes';
import './locales/i18n'; 
import './index.less'

const App: React.FC = () => {
  return (
    <div>
      <AppRoutes />
    </div>
  );
};

export default App;