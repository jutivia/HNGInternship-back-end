import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css'
import App from './App'
import HomePage from './HomePage'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Error from './Error'
import UnitProj from './unitProj'

const IndexedApp = () => {
    return (
        <Router>
            <Switch>
            <Route  path='/Home'>
                <App/>
            </Route>
             <Route exact path='/'>
                <HomePage/>
            </Route>
             <Route path='/About'>
                <About/>
            </Route>
             <Route path='/Projects'>
                <Projects/>
            </Route>
            <Route path='/project/:id' 
            children={<UnitProj/>}>
            </Route>
             <Route path='/Contact'>
                <Contact/>
            </Route>
             <Route path='*'>
                <Error/>
            </Route>
            </Switch>
    
    
    
        </Router>
    )
}

export default IndexedApp
