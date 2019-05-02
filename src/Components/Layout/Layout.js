import React, { Component } from 'react'
import classes from './Layout.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Layout extends Component {

  render() {

    return (
      <div style={{height:'130vh'}}>
        <nav className={classes.navContainer} >
            <div  className={classes.nav}>
                <div  className={classes.adamsacademyLogo}>
                 <img src="https://www.adamsacademy.com/wp-content/uploads/2018/01/LOGO-web2.png" style={{width:'100%'}}/>
                </div>
                
                <div className={classes.allCourses}>
                  <h3 className={classes.courses}>All Courses</h3>
                  <FontAwesomeIcon
                  icon={['fas','search']}
                  transform="grow-4" 
                  className={classes.fontawesome}
                  />
                </div>
                
                <div className={classes.login}>
                  <h3 className={classes.courses}>Log in</h3>
                  <FontAwesomeIcon
                  icon={['fas','shopping-basket']}
                  transform="grow-4" 
                  className={classes.fontawesome}
                  />
                </div>
            </div>
        </nav>
        <main  >
            {this.props.children}
        </main>
      </div>
    )
  }
}
