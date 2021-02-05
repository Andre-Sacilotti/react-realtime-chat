import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Router from "./router/Router"
import {connect} from 'react-redux'
import ToastNotification from "./components/ToastNotification/ToastNotification";
import styled from 'styled-components'
import Navbar from "./components/Navbar/Navbar";


const ToastDiv = styled.div`
  width: 100vw;
  display: flex;
  align-items: end;
  justify-content: center;
`

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar>

          </Navbar>
          <ToastDiv>
              <ToastNotification stay={props.showToast.stay} hide={props.showToast.hide} show={props.showToast.show} type={props.showToast.type} message={props.showToast.message}/>
          </ToastDiv>
        <Router></Router>
      </BrowserRouter>

    </div>
  );
}

const mapStateToProps = (store) => ({
    showToast: store
})

export default connect(mapStateToProps, null)(App);
