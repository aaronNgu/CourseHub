//TODO: make the button work....
import React from 'react';
import "./ContactUs.css"
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import {connect} from 'react-redux'
import { sendMessage } from "../../actions";

class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            subject: '',
            message: ''
        }
    }

    handleInputChange = (e) => {
        e.preventDefault();
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }

    handleSendMessage = () => {
        if (this.state.email !== '' && this.state.subject !== '' && this.state.message !== '') {
            this.props.sendMessage({
                email: this.state.email,
                subject: this.state.subject,
                message: this.state.message
            })
            this.setState({
                email: '',
                subject: '',
                message: ''
            })
        }
    }

    render() {
        return (<div className="contactPage">
            <h2>Contact Us!</h2>
            <div className="contactForm">
                <TextField
                    required
                    label="Email"
                    className="email"
                    name="email"
                    margin="normal"
                    onChange={this.handleInputChange.bind(this)}
                />
                <TextField
                    required
                    label="Subject"
                    className="subject"
                    margin="normal"
                    name="subject"
                    onChange={this.handleInputChange.bind(this)}
                />
                <TextField
                    required
                    label="Message"
                    multiline
                    rowsMax="5"
                    className="message"
                    margin="normal"
                    name="message"
                    onChange={this.handleInputChange.bind(this)}
                />
                <Button
                    variant="contained"
                    color="#A17070"
                    id="sendButton"
                    style={{
                        padding: '5px 10px',
                        marginTop: '10px',
                        backgroundColor: '#A17070',
                        color: 'white'
                    }}
                    onClick={this.handleSendMessage.bind(this)}
                >
                    Send
                    <Icon>send</Icon>
                </Button>
            </div>
        </div>);
    }
}

export default connect(
    null,
    { sendMessage }
)(ContactPage);
