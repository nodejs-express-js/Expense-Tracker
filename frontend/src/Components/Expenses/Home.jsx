import React from 'react'
import styles from './Home.module.css'
import Navbar from '../Navbar'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'
const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className={styles.minicontainer}>
            <HomeLeft></HomeLeft>
            <HomeRight></HomeRight>
        </div>
        
    </div>
  )
}

export default Home