import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import {PostsList} from './features/posts/PostsList'
import Button from './components/Button';
import Message from './components/Message';

function App() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <PostsList/>
              </React.Fragment>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
      {/* <Button handleClick={handleClick} open={open} setOpen={setOpen}/>
      <Message open={open} setOpen={setOpen}/> */}

    </Router>
  )
}

export default App
