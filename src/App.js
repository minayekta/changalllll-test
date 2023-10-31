import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import EditUser from './components/EditUser';
import Header from './components/Header';
import Users from './components/Users';
import { ThemeProvider } from './context/themeContext';
function App() {
  return (
    <ThemeProvider>
      <div className='App dark:bg-Blue-dark min-h-screen'>
        <Router>
          <Header />

          <Routes>
            <Route path='/users' element={<Users />} />
            <Route path='/users/:id' element={<EditUser />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
