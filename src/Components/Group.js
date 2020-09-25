import React, { Component } from 'react';
import './Group.scss';
import 'antd/dist/antd.css';
import { Popover, Button } from 'antd';
// TODO 可以改写为函数组件
class Group extends Component {
  render() {
    return (
      // TODO className命名需要更加明确，且遵循a-b-c
      <div className="Group">
        <div className="groupName">
          {this.props.num}
          <span className="groupTrainer">
            <div className="firstTrainer">
              <Popover
                content={
                  <div>
                    <span>Trainer1.id</span>
                    <span>Trainer1.name</span>
                  </div>
                }
                title="Title"
              >
                <Button type="primary">Trainer1</Button>
              </Popover>
            </div>
            <Popover
              content={
                <div>
                  <span>Trainer2.id</span>
                  <span>Trainer2.name</span>
                </div>
              }
              title="Title"
            >
              <Button type="primary">Trainer2</Button>
            </Popover>
          </span>
        </div>
        {/* TODO className命名统一规范 */}
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
