
import './Submit.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import Home from './components/Home';
import Submit from './components/Submit';
import Tasks from './components/Tasks';
import Leaderboard from './components/Leaderboard'


function App() {

  let Component
  switch (window.location.pathname) {
    case "/":
      Component = <Home />
      break
    case "/Tasks":
      Component = <Tasks />
      break
    case "/Submit":
      Component = <Submit />
      break
    case "/Leaderboard":
      Component = <Leaderboard />
      break
    default:
      /* code */
      break;
  }
  return (
    <>
      <NavbarComp />
      <div className="App">
        {Component}
      </div>

    </>

  );
}

export default App;
