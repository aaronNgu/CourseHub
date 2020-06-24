import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Box } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import LooksOneIcon from '@material-ui/icons/LooksOne';
import LooksTwoIcon from '@material-ui/icons/LooksTwo';
import Looks3Icon from '@material-ui/icons/Looks3';
import Looks4Icon from '@material-ui/icons/Looks4';
import Looks5Icon from '@material-ui/icons/Looks5';
import "./HomePage.css"

const useStyles = makeStyles({
    rating: {
        padding: '0px 22px',
        marginBottom: '5px',
        backgroundColor: '#E5A0A0',
    },
    main: {
        width: '75%',
        backgroundColor: '#FFECEC',
        ['@media (max-width:900px)']: {
            width: '100%',
        },
        margin: '20px 0px',
    }
})

function CourseItem(props) {
    const classes = useStyles();

    return <Box className={`courseItemHorizontal ${classes.main}`}>

        <Box className='courseItemHorizontal'>

            <Box className='courseItemVerticalSides'>
                <Typography variant='h6'>Rating</Typography>
                <Paper className={classes.rating}>
                    <Typography variant='h3'>{props.rating || 5}</Typography>
                </Paper>
            </Box>

            <Box className='courseItemVerticalSides courseItemVerticalMiddle'>
                <Typography variant='h5'>{props.courseNumber || 'CPSC110'} </Typography>
                <Typography variant='body2'>{props.review || 'It was an awesome course!'}</Typography>
            </Box>

        </Box>

        <Box className='courseItemVerticalSides courseItemVerticalMiddle'>
            <Typography variant='body2'>{props.date || '2/19/2020'}</Typography>
            <Box className='courseItemIconContainer'>
                <LooksOneIcon className='courseItemIcon' onClick={() => props.onRatingOne(props.courseNumber)}/>
                &nbsp;&nbsp;
                <LooksTwoIcon className='courseItemIcon' onClick={() => props.onRatingTwo(props.courseNumber)}/>
                &nbsp;&nbsp;
                <Looks3Icon className='courseItemIcon' onClick={() => props.onRatingThree(props.courseNumber)}/>
                &nbsp;&nbsp;
                <Looks4Icon className='courseItemIcon' onClick={() => props.onRatingFour(props.courseNumber)}/>
                &nbsp;&nbsp;
                <Looks5Icon className='courseItemIcon' onClick={() => props.onRatingFive(props.courseNumber)}/>
                &nbsp;&nbsp;
                <EditIcon className='courseItemIcon' onClick={() => props.onEdit(props.courseNumber)}/>
                &nbsp;&nbsp;
                <DeleteIcon className='courseItemIcon' onClick={() => props.onCancel(props.courseNumber)}/>
            </Box>
        </Box>

    </Box>;
}

export default CourseItem;