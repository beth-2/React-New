import React, { Component } from 'react'
import faker from 'faker'
import styles from './CssModules.module.css';

const ApproveCard = ({name, comment, relationship})=> {
  return(
    <div className="ui cards" id={styles.cards}>
<div className="card">
  <div className="content">
    <img className="right floated mini ui image" src={faker.image.avatar()}></img>
    <div className="header">
      {name}
    </div>
    <div className="meta">
      {relationship}
    </div>
    <div className="description">
      {comment}
    </div>
  </div>
  <div className="extra content">
    <div className="ui two buttons">
      <div className="ui basic green button">Approve</div>
      <div className="ui basic red button">Decline</div>
    </div>
  </div>
</div>
<div/>
</div>
  )
}
export default ApproveCard