import './App.css';
import React, {useEffect} from 'react'
import {BrowserRouter} from 'react-router-dom';
import Router from "./router/Router"
import {connect} from 'react-redux'
import ToastNotification from "./components/ToastNotification/ToastNotification";
import styled from 'styled-components'
import {handlerLogin, handlerLogout} from "./store/actions/AuthAction";


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
          {/*<Navbar>*/}

          {/*</Navbar>*/}
          <ToastDiv>
              <ToastNotification stay={props.storeReducer.toastReducer.stay}
                                 hide={props.storeReducer.toastReducer.hide}
                                 show={props.storeReducer.toastReducer.show}
                                 type={props.storeReducer.toastReducer.type}
                                 message={props.storeReducer.toastReducer.message}/>
          </ToastDiv>
        <Router></Router>
      </BrowserRouter>

    </div>
  );
}

const mapStateToProps = (store) => ({
    storeReducer: store
})

const mapDispatchToPros = dispatch => {
    return {
        addLogin: () => dispatch(handlerLogin()),
        removeLogin: () => dispatch(handlerLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToPros)(App);
