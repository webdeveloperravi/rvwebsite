
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Gallery from './Gallery';
import Errorpage from './Errorpage';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contactus' component={Contact} />
        <Route exact path='/aboutus' component={About} />
        <Route exact path='/gallery' component={Gallery} />
        <Route component={Errorpage} />
      </Switch>
      <Footer />


    </>
  );
}

export default App;