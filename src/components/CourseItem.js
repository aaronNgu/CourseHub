import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Box } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
    rating: {
        padding: '0px 22px',
        marginBottom: '5px',
        backgroundColor: '#E5A0A0',
    },
    main: {
        width: '800px',
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
                <Typography variant='body2'>{props.review || 'It was an awsome course!'}</Typography>
            </Box>

        </Box>

        <Box className='courseItemVerticalSides courseItemVerticalMiddle'>
            <Typography variant='body2'>{props.date || '2/19/2020'}</Typography>
            <Box className='courseItemIconContainer'>
                <EditIcon className='courseItemIcon' onClick={props.onEdit}/>
                &nbsp;&nbsp;
                <DeleteIcon className='courseItemIcon' onClick={props.onCancel}/>
            </Box>
        </Box>

    </Box>;
}

export default CourseItem;
