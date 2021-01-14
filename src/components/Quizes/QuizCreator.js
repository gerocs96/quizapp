import React, {Component} from 'react';
import {Connect} from 'react-redux';
import {addReminder} from "./";

class ReminderCreator extends Component{
    state = {text: ""};
    handleChange = E => {this.setState({text: e.target.value})};
}