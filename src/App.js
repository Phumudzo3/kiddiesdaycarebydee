import './App.css';
import { Activities } from './component/Activities';
import { Banner } from './component/Banner';
import { Contact } from './component/Contact';
import { Footer } from './component/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from './component/Header';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { PhotoApp } from './component/Photo';
import { Home } from './component/Home';



function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header />

        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" >
            <Home />
          </Route>

          
          <Route path="/banner" >
            <Banner />
          </Route>
          <Route path="/gallery" >
            <PhotoApp />
          </Route>
          <Route path="/service">
          <Activities />

          </Route>
          <Route path="/contact" >
            <Contact />
          </Route>


        </Switch>




        <Activities />

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
