import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ApplyForm from './components/ApplyForm';
import ApplySucess from './components/ApplySucess';
import Home from './components/Home';
import AllJob from './components/AllJob';
import Internship from './components/Internship';
import Contact from './components/Contact';
import JobDetail from './components/JobDetail';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './theme.css'
require('dotenv').config()



function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Navbar></Navbar>
      {/* <React.StrictMode> */}
      <div className="content">
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/allJob" component={AllJob} />
          <Route exact path="/internship" component={Internship} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/job/:jobId" component={JobDetail} />

          <Route exact path="/apply/:jobId" render={ (props) => <ApplyForm {...props} />} />
          <Route exact path="/applySucess" component={ApplySucess} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </div>
      {/* </React.StrictMode> */}
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
