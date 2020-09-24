import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import '../App/App.scss'
import 'antd/dist/antd.css';
import { Popover, Button, Modal, message } from 'antd';
import Group from './Group';

class Homepage extends Component {
  state = {
    visible:false,
    showGroup:false,
    trainees:[],
    trainers:[],
  }

  showModal = (event) => {
    document.getElementsByClassName(event.target.id).visible=true
    console.log(event.target.id)
  };

  handleDeleteTraineeOk = (event) => {
    this.deleteTrainee(event.target.id)
    this.setState({
      visible: false,
    });
  };

  handleDeleteTrainerOk = (event) => {
    this.deleteTrainer(event.target.id)
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };
  
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

  deleteTrainee = async (traineeId) => {
    return fetch("http://localhost:8080/trainees/{$traineeId}", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((result) => {
          message.info('删除学员成功！');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  deleteTrainer = async (trainerId) => {
    return fetch("http://localhost:8080/trainers/{$trainerId}", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((result) => {
          message.info('删除讲师成功！');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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
                        <span className="trainer">
                          <Button type="primary" onClick={this.showModal}>{trainer.id}. {trainer.name}</Button>
                          <Modal
                            title="删除讲师"
                            visible={this.state.visible}
                            onOk={this.handleDeleteTrainerOk}
                            onCancel={this.handleCancel}
                            >
                            <p>是否要删除讲师 {trainer.id}.{trainer.name}?</p>
                            </Modal>
                        </span>
                  </Popover>
              ))}             
              <Link to="/addTrainer"><Button type="primary" className="trainer" onClick={this.add}>+添加讲师</Button></Link>
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
                    <span className="trainee" id={trainee.id}>
                        <Button type="primary" onClick={this.showModal} id={trainee.id}>{trainee.id}. {trainee.name}</Button>
                        <Modal className={trainee.id}
                        title="删除学员"
                        visible={this.state.visible}
                        onOk={this.handleDeleteTraineeOk}
                        onCancel={this.handleCancel}
                        >
                        <p>是否要删除学员 {trainee.id}.{trainee.name}?</p>
                        </Modal>
                    </span>
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