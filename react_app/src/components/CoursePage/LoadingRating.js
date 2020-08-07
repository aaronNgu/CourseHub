import React from 'react';
import { Typography, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	rating: {
		padding: '0px 22px',
		marginBottom: '5px',
		backgroundColor: '#E5A0A0',
	},
});

const LoadingRating = (props) => {
	const classes = useStyles();

	return (
		<Paper className={classes.rating}>
			<Typography variant='h3'>&nbsp;</Typography>
		</Paper>
	);
};

export default LoadingRating;
