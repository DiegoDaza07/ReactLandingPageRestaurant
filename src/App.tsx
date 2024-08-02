import { Loading } from '@/components';
import store from '@/redux/store';
import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {

  //Routes
  const Home = lazy(() => import('@/pages/home/home'));

  //Routes
  return (
    <React.StrictMode>
      <Suspense fallback={<Loading />}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path={`/home`} element={<Home />} />
              <Route path={`*`} element={<Navigate to="/home" replace />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </React.StrictMode>
  )
};

export default App;
