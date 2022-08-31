import React from 'react'
import classes from './lower-section.module.scss'

const LowerSection:React.FC = () => 
   (
    <section className={classes.lowerSection}>
    <div className={classes.lowerSection + ' ' + classes.firstBox}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolorum est, molestias dolores quis sunt nobis temporibus veritatis libero odio!
    </div>
    <div className={classes.lowerSection + ' ' + classes.secondBox}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolorum est, molestias dolores quis sunt nobis temporibus veritatis libero odio!
    </div>
    <div className={classes.lowerSection + ' ' + classes.thirdBox}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolorum est, molestias dolores quis sunt nobis temporibus veritatis libero odio!
    </div>
  </section>
  )


export default LowerSection