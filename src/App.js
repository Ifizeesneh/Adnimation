
import './App.css';
import { Banner } from './components/Banner';
import { Banner2 } from './components/Banner2';
import { Banner3 } from './components/Banner3';
import { Banner4 } from './components/Banner4';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { Services } from './components/Services';
import { Trusted } from './components/Trusted';




function App() {
  return (
    <div className="App">
     <Navigation />
     <Banner />
    <Trusted />
    <Banner2 />
    {/* <Banner3 /> */}
    {/* <Banner4 /> */}
    <Services />
    <Contact />
    {/* <Footer /> */}
    </div>
  );
}

export default App;
