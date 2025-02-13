import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home'


export function Router() {
    return (
      <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    );
  }