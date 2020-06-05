import React from 'react';

class CourseItem extends React.Component{
    render() {
        const styles = {
            courseitem: {
                display: 'flex',
                flexDirection: 'column',
                border: 'solid',
                width: '30%',
                padding: '10px;'
            },
            courseitem_top: {
                display: 'flex'
            },
            courseitem_bottom: {
                display: 'flex'
            },
            courseitem_review: {
                border: "solid",
                marginLeft: "10px",
                padding: "5px"
            }
        }

        return (
            <div style={styles.courseitem} > 

                <div style={styles.courseitem_top}>
                    <h3>CPSC 110</h3> 
                    &nbsp; &nbsp;
                    <h3>Computation, Programs and Programming</h3>
                </div>
                <div style={styles.courseitem_bottom}>
                    <div><h4>Ratings 4/5</h4></div>
                    <div style={styles.courseitem_review}><p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aenean sodales rutrum sagittis. Integer ipsum nisi, 
                        sodales euismod pretium eget, fermentum eget arcu. 
                        Phasellus scelerisque tellus porttitor sem rutrum, pl...” more</p></div>
                </div>
            </div>
        );
    }
}

export default CourseItem;