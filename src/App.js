import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Home';
import List from './Components/List';
import Errorpage from './Components/Errorpage';
import Usercreatelist from './Components/User/Usercreatelist';
import Userdashboard from './Components/User/Userdashboard';
import Showlist from './Components/User/Showlist';
import Profile from './Components/User/Profile';
import Usereditlist from './Components/User/Usereditlist';
import Contact from './Components/Contact';
import Ban from './Components/Ban';
import Listmenu from './Components/User/Listmenu'
import Image from './Components/User/Image'
import Usersearchlist from './Components/User/Usersearchlist'
import Login from './Components/Login';


function App() {
  return (
<Router>
      <Switch>
        
        <Route exact path="/" component={Home} />
        <Route path="/List" component={List} />
        <Route path="/Usercreatelist" component={Usercreatelist} />
        <Route path="/Usereditlist" component={Usereditlist} />
        <Route path="/Userdashboard" component={Userdashboard} />
        <Route path="/Showlist" component={Showlist} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Ban" component={Ban} />
        <Route  path='/listmenu' component={Listmenu}/>
        <Route  path='/image' component={Image}/>
        <Route  path='/Login' component={Login}/>
        <Route  path='/usersearchlist' component={Usersearchlist}/>
        <Route component={Errorpage} />
        {/* <Route  path='/addlist' component={Addlist}/>
        <Route  path='/keephome' component={Keephome}/>
        <Route  path='/listhome' component={List}/>
        <Route  path='/listcondo' component={Listcondo}/>
        <Route  path='/building' component={Building}/>
        <Route  path='/townhouse' component={Townhouse}/>
        <Route  path='/login' component={Login}/>
        <Route  path='/signup' component={Signup}/>
        <Route  path='/search' component={Search}/>
        <Route  path='/admin' component={Admin}/>
        <Route  path='/text' component={Text}/>  */}
        

    

       
      </Switch>

    </Router>
  );
}

export default App;
