import {Route,Switch} from 'react-router-dom';
import Home from '../Views/Home';

const Index =()=>{
    return(
        <Switch>
            <Route component={Home} exact path={["/","/home"]}/>
        </Switch>
    )
}
export default Index;