import React from 'react'
import styles from './components/blog';



class Blog extends React.Component {
    render(){
        return(
            <div>
                <p className={styles.texto}>hello</p>
                <p>hola</p>


            </div>
        )
    }
}

export default Blog;