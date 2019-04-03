import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Api from '../Api.js';
import "react-datepicker/dist/react-datepicker.css";
import PostEditor from "./PostEditor";
import EventsList from "./EventsList";
import Navigation from "./Navigation";

class Main extends React.Component {
   constructor(props, context) {
    super(props, context);

    this.state = {
      data: [],
      startDate: null,
      endDate: null,
      filter: [],
    };
  }

  accordeonHandler = (statement) => {
    this.setState({
      accodeon : statement
    })
  }

  componentDidMount(){
    this.setState({
      data: Api
    });
  }

  getHumanFormat = (timestamp)=>{
    let date = new Date(timestamp * 1000);
    return `${ ("0" + date.getDate()).slice(-2) }.${("0" + (date.getMonth() + 1)).slice(-2) }.${date.getFullYear()}
            ${date.getHours()}:${(date.getMinutes()<10?'0':'') + date.getMinutes()}`
  }

  timeToUnix = (date) => {
    return new Date(date).getTime() / 1000;
  }

  handleStartDate = (date) =>{
    this.setState({
      startDate: date
    });
  }

  handleEndDate = (date) =>{
    this.setState({
      endDate: date
    });
  }

  insertEvent = (data) => {
    let new_state = this.state.data;
    let last_post = new_state.sort( (a, b) => { return b.id - a.id } );
    data.id = last_post.length !== 0 ? ( last_post[0].id + 1 ): 1;
    new_state.push(data);
    this.setState({
      data: new_state,
    })
  }

  deleteState = (id) =>{
    let new_state = this.state.data.filter(obj => { return obj.id !== id});

    this.setState({
      data: new_state,
    });
  }


  render() {

    let api_interface = {
      getHumanFormat: this.getHumanFormat,
      handleStartDate : this.handleStartDate,
      handleEndDate : this.handleEndDate,
      timeToUnix: this.timeToUnix,
      deleteState: this.deleteState,
    }

    let dataPicker_api = {
      startDate: this.state.startDate,
      endDate: this.state.endDate,
    }

    let sorted_posts = this.state.data.sort((fst, sec)=>{return fst.start_ts - sec.start_ts});

    if (this.state.startDate) {
        sorted_posts = sorted_posts.filter((obj) => {return obj.start_ts >= new Date(this.state.startDate).getTime() / 1000});
    }
    if (this.state.endDate) {
        sorted_posts = sorted_posts.filter((obj) => {return obj.start_ts <= new Date(this.state.endDate).getTime() / 1000 });
    }

    return (
      <div>
        <Router>
            <Navigation />
            <div>
              <Route exact path={'/'} component={()=> <Redirect to="list" />} />
              <Route path={'/list'} exact={true} render={props => <EventsList {...props} data={sorted_posts} api_interface={api_interface} dataPicker_api={dataPicker_api} />} />
              <Route path={'/edit'} render={props => <PostEditor form_handler={this.insertEvent} />} />
            </div>
        </Router>
      </div>
    );
  }
}

export default Main;
