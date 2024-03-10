import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Card from './components/Card';
import Carddetails from './components/Carddetails'
import Try from './components/Try';
import store from './Store';
import { Provider } from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
 

  return (
    <div>
    <Provider store={store}>
    <BrowserRouter>
    <Header></Header>
    <Routes>
    <Route path='/' element={<Card></Card>}></Route>
    <Route path='/cart/:id' element={<Carddetails></Carddetails>}></Route>
    <Route path='/try' element={<Try></Try>}></Route>
      

      </Routes>

      </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
