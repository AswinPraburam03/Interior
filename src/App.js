
import './App.css';
import Main from './components/Main/Main';
import Blogs from './components/blogs/Blogs';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Topbar from './components/topbar/Topbar'

function App() {
  return (
    <div className="App">
      <Topbar />
      <Home />
      <Main />
      <Blogs />
      <Footer />
      
    </div>
  );
}

export default App;
