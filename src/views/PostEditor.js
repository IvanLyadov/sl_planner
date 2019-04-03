import React, { Component } from 'react';
import { Redirect, NavLink } from "react-router-dom";
import { Button, ListGroup, Collapse, ListGroupItem, Container, Row, Col, Badge } from 'react-bootstrap';
import { UncontrolledCollapse, CardBody, Card, CardHeader, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class PostEditor extends React.Component {
   constructor(props, context) {
    super(props, context);

    this.state = {
      data: [],
      startDate: null,
      endDate: null,
      redirect: false,
    };
  }
  handleStartDate = (date) => {
    this.setState({
      startDate: date
    });
  }
  handleEndDate = (date) => {
    this.setState({
      endDate: date
    });
  }

  handleSubmit = () => {
    let form_data = {};
    let {form_handler} = this.props;

    form_data.startDate = document.getElementById('startDate').value;
    form_data.endDate = document.getElementById('endDate').value;
    form_data.title = document.getElementById('title').value;
    form_data.description = document.getElementById('description').value;

    form_handler(form_data);
    this.setState({
      redirect: true
    })
  }

  componentDidMount(){}

  render() {

    return (
      <div>
      {this.state.redirect && <Redirect to="/list" />}
        <header>
        <Container className="main_container">
          <Row>
            <Col>
              <h3>Add new event </h3>
              <CardHeader>
              <Form>
               <Row>
                <Col>
                  <FormGroup>
                   <Label for="startDate" className="editor-lable">Start date: </Label>
                   <DatePicker
                    className="form-control"
                    id="startDate"
                    name="start_date"
                    type="date"
                    dateFormat="dd.MM.yyyy h:mm"
                    showTimeSelect
                    showDisabledMonthNavigation
                    selected={this.state.startDate}
                    onChange={this.handleStartDate} />
                 </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="endDate" className="editor-lable">End date: </Label>
                    <DatePicker
                     className="form-control"
                     id="endDate"
                     name="end_date"
                     type="date"
                     dateFormat="dd.MM.yyyy h:mm"
                     showTimeSelect
                     showDisabledMonthNavigation
                     selected={this.state.endDate}
                     onChange={this.handleEndDate} />
                  </FormGroup>
                </Col>
               </Row>

               <FormGroup>
                 <Label for="title">Title</Label>
                 <Input
                   type="text"
                   name="title"
                   id="title"
                   placeholder=""
                 />
               </FormGroup>
               <FormGroup>
                 <Label for="description">Description</Label>
                 <Input type="textarea" name="description" id="description" />
               </FormGroup>
               <Button onClick={this.handleSubmit}>Submit</Button>
             </Form>
              </CardHeader>
            </Col>
          </Row>
        </Container>
        </header>
      </div>
    );
  }
}

export default PostEditor;
