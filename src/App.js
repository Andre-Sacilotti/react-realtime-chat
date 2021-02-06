import './App.css';
import React, {useEffect} from 'react'
import {BrowserRouter} from 'react-router-dom';
import Router from "./router/Router"
import {connect} from 'react-redux'
import ToastNotification from "./components/ToastNotification/ToastNotification";
import styled from 'styled-components'
import Navbar from "./components/Navbar/Navbar";
import API from "./services/Axios";
import Cookies from "universal-cookie";
import {handlerLogin, handlerLogout} from "./store/actions/AuthAction";


const ToastDiv = styled.div`
  width: 100vw;
  display: flex;
  align-items: end;
  justify-content: center;
`

function App(props) {

    const cookies = new Cookies()

    useEffect(
        () => {

            const data = {auth_token: cookies.get("auth_token")}

            if (data !== ""){

                API.post("token", data).then(
                    (response) => {
                        console.log(response)
                        if (response.data['valid_auth'] === true){
                            props.addLogin()
                        }else{
                            console.log("False")
                        }
                    }
                ).catch(
                    (error) => {
                        console.log(error)
                        console.log("Error")
                    }
                )

            }

        }, []
    )
    console.log(props.storeReducer)
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar>

          </Navbar>
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
