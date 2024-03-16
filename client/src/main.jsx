import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { store, persistor } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProvider from './components/ThemeProvider.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </PersistGate>);








// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';
// import { store, persistor } from './redux/store.js';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import ThemeProvider from './components/ThemeProvider.jsx';
// import Public from './pages/Home';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//   <Routes>
//   <PersistGate persistor={persistor}>
//     <Provider store={store}>
//     <Route path="/" element={<Public />} />
    
      
//       <Route path="/Hello" element={<ThemeProvider> <App /> </ThemeProvider>} />
       
   
//     </Provider>
//   </PersistGate>
//   </Routes>
//   </BrowserRouter>
// );