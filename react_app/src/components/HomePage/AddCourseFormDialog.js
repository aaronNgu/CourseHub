import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from 'react-redux';
import {addCourse} from '../../actions';

function AddCourseFormDialog(props) {
  const [open, setOpen] = React.useState(false);
  let courseName = '';
  let courseDesc = '';
  let userRole = props.auth.userRole;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdminSubmit = (courseName, courseDescription) => {
    if (courseName === "" || courseDescription === "") {
      window.alert('Please do not leave the CourseName and Description fields empty.');
      return;
    } else {
      props.dispatch(addCourse(courseName, courseDescription));
      setOpen(false);
      window.location.reload();
    }
  };

  const handleCustomerSubmit = (courseName, courseDescription) => {
    setOpen(false);
    window.alert('TODO: send email with Add-course info to admins.')
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add a Course
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Course</DialogTitle>
        <DialogContent>

            {userRole === 'Admin' ?
            <DialogContentText>
                For Admins: To add course, please enter details below
            </DialogContentText> :
            <DialogContentText>
                Don't see the course you're looking for? Send us the course details and we'll add it for you!
            </DialogContentText>}

            <TextField
              autoFocus
              required
              margin="dense"
              id="course_id"
              label="CourseName"
              onInput={ e=>courseName = e.target.value}
              fullWidth
            />
            <TextField
              required
              margin="dense"
              id="course_description"
              label="Description"
              onInput={ e=>courseDesc = e.target.value}
              fullWidth
            />

        </DialogContent>
        <DialogActions>

          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>

          {userRole === 'Admin' ?
          <Button
            onClick={() => handleAdminSubmit(courseName, courseDesc)} color="primary">
              Submit
          </Button> :
          <Button
            onClick={() => handleCustomerSubmit(courseName, courseDesc)} color="primary">
              Send to Admins
          </Button>}

        </DialogActions>
      </Dialog>
    </div>
  );
}


const mapStateToProps = (state) => {
    return {
      courseList: state.courseList,
      auth: state.auth
    }
};

export default connect(mapStateToProps)(AddCourseFormDialog);
