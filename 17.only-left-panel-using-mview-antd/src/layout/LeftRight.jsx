/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import styles from './LeftRight.module.css'

function LeftRight({LeftSide, RightSide}) {
  return (
    <div className={styles.page}>
      <div className={styles.left} > {LeftSide}</div>
      
      <div className={styles.right}>{RightSide}</div>
    </div>
  );
}

export default LeftRight;
