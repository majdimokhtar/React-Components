import './App.css';
import Home from './Home';
import ProfilePhoto from  './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import Navigation from './Component/Profile/Navigation';

function App() {
  return (
<div className="App">
  <Navigation />
  <ProfilePhoto />
  <FullName />
  <Address />
  


</div>
);
}

export default App;
