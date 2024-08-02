import { Loading } from '@/components';
import store from '@/redux/store';
import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {

  //Routes
  const Home = lazy(() => import('@/pages/home/home'));
  const Menu = lazy(() => import('@/pages/menu/menu'));
  const MenuFilter = lazy(() => import('@/pages/menuFilter/menuFilter'));
  const Contact = lazy(() => import('@/pages/contact/contact'));

  return (
    <React.StrictMode>
      <Suspense fallback={<Loading />}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path={`/home`} element={<Home />} />
              <Route path={`/menu`} element={<Menu />} />
              <Route path={`/menu/:categoryname`} element={<MenuFilter />} />
              <Route path={`/contact`} element={<Contact />} />
              <Route path={`*`} element={<Navigate to="/home" replace />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </React.StrictMode>
  )
};

export default App;
