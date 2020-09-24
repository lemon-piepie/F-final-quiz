import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import '../App/App.scss'
import 'antd/dist/antd.css';
import { Popover, Button } from 'antd';
import Group from './Group';

class Homepage extends Component {
  state = {
    showGroup:false,
    trainees:[],
    trainers:[],
  }
  
  componentDidMount(){
    const TraineeUrl = 'http://localhost:8080/trainees';
    const TrainerUrl = 'http://localhost:8080/trainers';
    this.fetchData(TraineeUrl)
      .then((result) => {
        this.setState({
          trainees: JSON.parse(result),
        });
      })
      .catch((error) => console.error(error));
    this.fetchData(TrainerUrl)
      .then((result) => {
        this.setState({
          trainers: JSON.parse(result),
        });
      })
      .catch((error) => console.error(error));
  }

  fetchData = (url) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onreadystatechange =  () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.responseText);
          } else {
            reject(xhr.statusText);
          }
        }
      };
      xhr.send();
    });
  };

  addData = (event) => {
    if(event.keyCode === 13) {
      console.log("enter");
    }
  }

  showGroupList = () => {
    this.setState({
      showGroup:true,
    })
  }

  add = () => {
      setTimeout(() => {
          location.reload();
      }, 500);
  }
  
  render() {
    return (
      <BrowserRouter>
        <div data-testid="app" className="App">
          <section>
            <div className="first-line">
              <h1>分组列表</h1>
              <button onClick={this.showGroupList}>分组学员</button>
            </div>
            <div className={this.state.showGroup?'groupListShow':'groupListHide'}>
              <Group num="1组" />
              <Group num="2组" />
              <Group num="3组" />
            </div>          
          </section>
          <section>
            <h1>讲师列表</h1>
            <div className="all-data">
              {this.state.trainers.map((trainer) => (
                  <Popover content={
                    <div>
                      <span>id:{trainer.id},</span>
                      <span>name:{trainer.name}</span>
                    </div>} 
                    title="">
                      <span className="trainer"><Button type="primary">{trainer.id}. {trainer.name}</Button></span>
                  </Popover>
              ))}             
              <Button type="primary" className="trainer">+添加讲师</Button>
            </div>
          </section>
          <section>
            <h1>学员列表</h1>
            <div className="all-data">
              {this.state.trainees.map((trainee) => (
                <Popover content={
                  <div>
                    <span>id:{trainee.id},</span>
                    <span>name:{trainee.name},</span>
                    <span>office:{trainee.office},</span>
                    <span>email:{trainee.email},</span>
                    <span>github:{trainee.github},</span>
                    <span>zoomId:{trainee.zoomId},</span>
                  </div>} 
                  title="">
                    <span className="trainee"><Button type="primary">{trainee.id}. {trainee.name}</Button></span>
                  </Popover>
              ))}             
              <Link to="/addTrainee"><Button type="primary" className="trainee" onClick={this.add}>+添加学员</Button></Link>
            </div>
          </section>
        </div>
      </BrowserRouter>
    );
  }
}

export default Homepage;