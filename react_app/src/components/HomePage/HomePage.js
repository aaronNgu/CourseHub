import React from 'react';
import CourseItemList from '../HomePage/CourseItemList';
import './HomePage.css';
import Page from './Page';
import SearchBar from './SearchBar';

const HomePage = () => {
	return (
		<div className='HomePage'>
			<SearchBar />
			<CourseItemList />
			<Page />
		</div>
	);
};

export default HomePage;
