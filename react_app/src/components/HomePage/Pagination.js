import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

class Page extends React.Component{
    render() {
        return (<Pagination count={10} page={3}/>);
    }
}

export default Page;