import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../components/header/'
import Home from './home/'
import Colors from './colors/'
import Icons from './icons/'
import Invalid from './invalid/'
import Gallery from './gallery/'
import Nav from '../components/nav/'
import Footer from '../components/footer/'

// import app styles
require('../stylus/app.styl')


const BASE_URL = '/';

const navItems = [
    {
      name: 'Home',
      url: BASE_URL
    },
    {
      name: 'Colors',
      url: BASE_URL + 'colors'
    },
    {
      name: 'Icons',
      url: BASE_URL + 'icons'
    },
    {
      name: 'Components',
      url: BASE_URL + 'gallery'
    }
];

const footerProps = {
    year: (new Date()).getFullYear().toString(),
    name: 'Chao Zhang',
    title: 'Principal Software Engineer at Workday',
    repo: {
        name: 'StyleGuide',
        user: 'chaozhang',
        url: 'https://github.com/chaozhang/'
    },
    gitBtns: [
        {
          name: 'follow',
          size: '170px'
        },
        {
          name: 'star',
          size: '90px'
        },
        {
          name: 'fork',
          size: '90px'
        },
        {
          name: 'watch',
          size: '100px'
        }
    ]
};
 
const App = () => {
    return (
        <Router>
            <div className='bodywrap'>
                <Header
                    repo = "https://github.com/chaozhang/StyleGuide"
                    issues = "https://github.com/chaozhang/StyleGuide/issues/new"
                />
                <Nav
                    navItems = {navItems}
                />
                <div id='center'>
                    <Switch>
                        <Route exact path={navItems[0].url} component={Home} />
                        <Route path={navItems[1].url} component={Colors} />
                        <Route path={navItems[2].url} component={Icons} />
                        <Route path={navItems[3].url} component={Gallery} />
                        <Route component={Invalid} />
                    </Switch>
                </div>
                <Footer {...footerProps} />
            </div>
        </Router>
    );
}


ReactDOM.render(<App/>, document.getElementById('app'));