import React from 'react';

class CourseItem extends React.Component {
    render() {
        return (
            <div className="courseitem" >

                <div className="courseitem_top">
                    <h3>CPSC 110</h3>
                    &nbsp; &nbsp;
                    <h3>Computation, Programs and Programming</h3>
                </div>
                <div className="courseitem_bottom">
                    <div><h4>Ratings 4/5</h4></div>
                    <div className="courseitem_review"><p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean sodales rutrum sagittis. Integer ipsum nisi,
                    sodales euismod pretium eget, fermentum eget arcu.
                        Phasellus scelerisque tellus porttitor sem rutrum, pl...” more</p></div>
                </div>
            </div>
        );
    }
}

export default CourseItem;