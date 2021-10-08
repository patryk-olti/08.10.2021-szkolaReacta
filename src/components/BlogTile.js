import React from "react";

const BlogTile = ({ title, intro }) => {

    const styles = {
        container: {
            backgroundColor: 'gray',
            padding: '5px',
            borderBottom: '1px solid black'
        },
        title: {
            fontSize: '30px',
            letterSpacing: '2px'
        }
    }


    const introText = intro.length < 25 ? <p>{intro}</p> : <p>{intro.slice(0,25)}...</p>;

    return(
        <div style={styles.container} >
            <h2 style={styles.title} > {title} </h2>
            {introText}
        </div>
    )
}

export default BlogTile;