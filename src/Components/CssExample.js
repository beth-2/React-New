import React, { Component } from 'react'
import styles from './CssModules.module.css';

export default class CssExample extends Component {
    render() {
        return (
            <div>
                <h1 className={styles.primary}>CARDS</h1>
            </div>
        )
    }
}
