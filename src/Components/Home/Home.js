import React, { Component } from 'react'
import classes from './Home.module.scss';
import SmoothScroll from '../SmoothScroll/SmoothScroll';

export default class Home extends Component {

  render() {
    return (
      <div className={classes.home} >
          <div  className={classes.titleContainer}>
            <h1 className={classes.title}>Be Creative.</h1>
            <h4 className={classes.subTitle}>Master Real Skills Today.</h4>
            <button className={classes.startLearningBtn}><span className={classes.txt1}>Start learning</span><span className={classes.txt2}>Be Skilled</span></button>
          </div>
          <div className={classes.img1Container}>
           <img src="https://www.adamsacademy.com/wp-content/uploads/revslider/inspirationheader/header_penpot.png" style={{width:'100%'}}/>
          </div>
          <div className={classes.img2Container}>
            <img src="https://www.adamsacademy.com/wp-content/uploads/revslider/inspirationheader/header_flowerpot.png" style={{width:'100%'}}/>
          </div>
          <div className={classes.img3Container}> 
            <img src="https://www.adamsacademy.com/wp-content/uploads/revslider/inspirationheader/header_papers.png" style={{width:'100%'}}/>
          </div>
          <SmoothScroll />
      </div>
    )
  }
}
