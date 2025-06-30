```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import AnimatedCursor from "react-animated-cursor";
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
const isAndroid = /Android/i.test(navigator.userAgent);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
      { !isAndroid && <AnimatedCursor 
          innerSize={10} 
          outerSize={40} 
          outerScale={2} 
          outerAlpha={0} 
          innerStyle={{ backgroundColor: '#90b8f8' }} 
          outerStyle={{ backgroundColor: 'transparent', border: '4px solid #90b8f8' }} 
        /> }
    </RecoilRoot>
  </React.StrictMode>
);

```