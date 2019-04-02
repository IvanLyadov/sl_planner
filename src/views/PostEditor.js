import React, { Component } from 'react';
import { Button, ListGroup, Collapse, ListGroupItem, Container, Row, Col, Badge } from 'react-bootstrap';
import { UncontrolledCollapse, CardBody, Card, CardHeader, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class PostEditor extends React.Component {
   constructor(props, context) {
    super(props, context);

    this.state = {
      data: [],
    };
  }



  componentDidMount(){}

  render() {

    return (
      <div>
        <header>
        <Container>
          <Row>
            <Col>
              <h3>Add new event </h3>
              <CardHeader>
              <Form>
               <FormGroup>
                 <Label for="exampleDate">Date</Label>
                 <Input
                   type="date"
                   name="date"
                   id="exampleDate"
                   placeholder="date placeholder"
                 />
               </FormGroup>

               <FormGroup>
                 <Label for="exampleSearch">Title</Label>
                 <Input
                   type="text"
                   name="title"
                   id="exampleSearch"
                   placeholder=""
                 />
               </FormGroup>
               <FormGroup>
                 <Label for="exampleText">Description</Label>
                 <Input type="textarea" name="description" id="exampleText" />
               </FormGroup>
               <Button>Submit</Button>
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
