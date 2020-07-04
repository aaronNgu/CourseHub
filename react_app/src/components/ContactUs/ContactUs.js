//TODO: make the button work....
import React from 'react';
import "./ContactUs.css"
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        padding: '5px 10px',
        marginTop: '10px',
        backgroundColor: '#A17070',
        color: 'white'
    }
})

function ContactPage(props) {
    const classes = useStyles();

    return <div className="contactPage">
        <h2>Contact Us!</h2>
        <div className="contactForm">
            <TextField
                required
                label="Subject"
                className="subject"
                margin="normal"
            />
            <TextField
                required
                label="Message"
                multiline
                rowsMax="5"
                className="message"
                margin="normal"
            />
            <Button
                variant="contained"
                color="#A17070"
                className={classes.button}
                id="sendButton"
            >
                Send
                <Icon>send</Icon>
            </Button>
        </div>
    </div>;
}

export default ContactPage;
