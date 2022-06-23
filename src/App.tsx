import Home from '@pages/home';
import About from '@pages/about';
import Todo from '@pages/todo';
import Babylon from '@pages/babylon';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/babylon" element={<Babylon />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
};

export default App;
