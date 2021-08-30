import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import './Main.css';
import { Background } from '../../Components/Background/styled';
import { Container } from '../../Components/Container/styled';
import ReadAll from '../ReadAll/ReadAll';
import Create from '../Create/Create';
import DeleteAll from '../DeleteAll/DeleteAll';
import About from '../About/About';
import ReadOne from '../ReadOne/ReadOne';
import DeleteOne from '../DeleteOne/DeleteOne';
import UpdateOne from '../UpdateOne/UpdateOne';

export default function Main() {
  
  return (
  <Background>
      <BrowserRouter>
        <Navbar />
        <Container>
          <Switch>
            <Route path="/" exact component={ReadAll}></Route>
            <Route path="/create" component={Create}></Route>
            <Route path="/deleteall" component={DeleteAll}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/view/:id" component={ReadOne}></Route>
            <Route path="/delete/:id" component={DeleteOne}></Route>
            <Route path="/update/:id" component={UpdateOne}></Route>
          </Switch>
        </Container>
      </BrowserRouter>
  </Background>
  );
}