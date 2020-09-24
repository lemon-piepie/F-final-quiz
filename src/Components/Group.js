import React, { Component } from 'react';
import './Group.scss';
import 'antd/dist/antd.css';
import { Popover, Button } from 'antd';
class Group extends Component {

    render() {
      return (
        <div className="Group">
          <div className="groupName">
            {this.props.num}
            <span className="groupTrainer">
              <div className="firstTrainer">
                <Popover content={
                <div>
                  <span>Trainer1.id</span>
                  <span>Trainer1.name</span>
                </div>} 
                title="Title">
                  <Button type="primary">Trainer1</Button>
                </Popover>
              </div>
              <Popover content={
                <div>
                  <span>Trainer2.id</span>
                  <span>Trainer2.name</span>
                </div>} 
                title="Title">
                <Button type="primary">Trainer2</Button>
              </Popover>
            </span>
          </div>
          <div className="team-content">
              <ul>
                {/* {this.props.groupMember.map((student) => (
                  <li>{student.id}. {student.name}</li>
                ))} */}
              </ul>
          </div>
        </div>
      );
    }
  }
  
  export default Group;