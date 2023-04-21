import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import { darkTheme } from './theme.js';
import { HelmetProvider } from 'react-helmet-async'
import Home from './pages/Home'
import Character from './pages/Character'
import Team from './pages/Team'
function Router() {
    const theme = darkTheme;
  return (
      <ConfigProvider theme={theme} >
        <HelmetProvider context={{}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Character" element={< Character/>} />
              <Route path="/Team" element={<Team />} />
            </Routes>
          </BrowserRouter>
        </HelmetProvider>
      </ConfigProvider>
  );
}

export default Router;