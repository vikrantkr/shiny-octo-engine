import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import A from './a';
import B from './b';

function App() {
  console.log("Appppppp")
  return (
    
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/a">A</Link>
              </li>
              <li>
                <Link to="/b">B</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            
          <Routes>
          <Route exact path="/a" element={<A/>}/>
          <Route exact path="/b" element={<B/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default React.memo(App);
