import React from "react";
import styles from "./styles.module.css";

/**
 * @return HTMLElement
 */
const Loading = () => (
  <div className={styles['loading']}>
    <img src={`${process.env.PUBLIC_URL }/images/loading.svg`} alt="loading"/>
  </div>
);

export default Loading;