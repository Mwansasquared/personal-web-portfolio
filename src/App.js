import React from 'react';
import './styling/App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Contact from './Components/contact';
import Projects from './Components/projects';
import Blogs from './Components/blogs';
import AboutMe from './Components/about-me';

class App extends React.Component {
  render () {
    return (
      <div className='App bg-stone-50'>

        <Header />
        <AboutMe />
        <Projects />
        <Blogs />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
