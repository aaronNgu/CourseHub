import React from 'react';
import "./ContactUs.css"
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import * as emailjs from "emailjs-com";

class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            subject: '',
            message: '',
            thank_you: false,
            error_msg: 0
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
            let template_params = {
                "user_email": this.state.email,
                "subject": this.state.subject,
                "message": this.state.message
            }
            emailjs
                .send("gmail", "contact_form", template_params, 'user_SdXfng2qQntNIQxhaHBg6')
                .then((res) => {
                    console.log(res);
                    this.setState({
                        email: '',
                        subject: '',
                        message: '',
                        thank_you: true
                    });
                })
                .catch((error) => {
                    console.error(error);
                });
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
                    value={this.state.email}
                    onChange={this.handleInputChange.bind(this)}
                />
                <TextField
                    required
                    label="Subject"
                    className="subject"
                    margin="normal"
                    name="subject"
                    value={this.state.subject}
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
                    value={this.state.message}
                    onChange={this.handleInputChange.bind(this)}
                />
                <Button
                    variant="contained"
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
            {this.state.thank_you ? <h2>Thank you for contacting us!</h2> : null}
        </div>);
    }
}

export default ContactPage;
