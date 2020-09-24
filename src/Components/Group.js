import React, { Component } from 'react';
import './Group.scss';

class Group extends Component {
      
    render() {
      return (
        <div className="Group">
          
          <div className="groupName">{this.props.num}</div>
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