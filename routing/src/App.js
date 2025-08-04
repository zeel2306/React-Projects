
import './App.css';
import Home from './Home';
import About from './About';
import Account from './Account';
import Setting from './Setting';
import Profile from './Profile';
import { Route, Routes ,useParams} from 'react-router';
import User from './User';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
                <Route path='/Post/:Postid' element={<Post/>} />

        <Route path='/User/:username' element={<User />} />
       


        <Route path='/Account' >
          <Route path='Profile' element={<Profile />}></Route>
          <Route path='Setting' element={<Setting />}></Route>
        </Route>


      </Routes>

    </div>
  );
}

export default App;
