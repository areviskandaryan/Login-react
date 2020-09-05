import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Inputs from "./Components/Inputs/Inputs";
import Button from "./Components/Button/Button";



export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: "",
            surNameValue: "",
            errorName: "",
            errorSurName: "",

        }
    }


    handleInputUpdateName = ({target: {value}}) => {
        if (value.length < 5) {
            this.setState({
                errorName: "input 5 symbol",
            })
        } else {
            this.setState({
                nameValue: value,
                errorName: "",
            })

        }
    }


    handleInputUpdateSurName = ({target: {value}}) => {
        if (value.length < 5) {
            this.setState({
                errorSurName: "input 5 symbol",
            })
        } else {
            this.setState({
                surNameValue: value,
                errorSurName: "",
            })
        }
    }


    handleUpdateChangesName = ({target: {value}}) => {
        this.setState({nameValue: value})
    }


    handleUpdateChangesSurname = ({target: {value}}) => {
        this.setState({surNameValue: value})
    }
    handleDataAdd = (e) => {
        e.preventDefault();
        localStorage.setItem("login", JSON.stringify({login: this.state.nameValue, pass: this.state.surNameValue}));
    }


    render() {
        const { nameValue, surNameValue, errorSurName, errorName, disabled} = this.state;
        console.log(nameValue, surNameValue, errorSurName, errorName, disabled)


        return (
              <div className="login-container">
                  <div className="form-wrapper">
                      <form>
                          <Inputs valueName={nameValue} valueSurName={surNameValue}
                                  onHandleInputUpdateName={this.handleInputUpdateName}
                                  onHandleUpdateChangesName={this.handleUpdateChangesName}
                                  onHandleInputUpdateSurName={this.handleInputUpdateSurName}
                                  onHandleUpdateChangesSurname={this.handleUpdateChangesSurname}
                                  errorSurNameValue={errorSurName} errorNameValue={errorName} />
                          <Button valueName={nameValue} valueSurName={surNameValue}
                                  onHandleDataAdd={this.handleDataAdd}/>

                      </form>

                  </div>

        </div>)
    }

}


