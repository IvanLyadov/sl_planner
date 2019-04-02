import React, { Component } from 'react';
import { Button, ListGroup, Collapse, ListGroupItem, Container, Row, Col, Badge } from 'react-bootstrap';
import { UncontrolledCollapse, CardBody, Card, CardHeader, Form, FormGroup, Label, Input } from 'reactstrap';
import DatePicker from "react-datepicker";

class EventsList extends React.Component {
   constructor(props, context) {
    super(props, context);

    this.state = {
      data: [],
      startDate: null,
      endDate: null,
      filter: [],
    };
  }

  render() {
    console.log(this.props);
    const { open, accodeon, data } = this.state;

    return (
      <div className="App">
        <header className="App-header">
        <Container>
          <Row>
            <Col>
            <h3>Events list</h3>
            <CardHeader>
            <Form>
               <FormGroup>
                <Row>
                  <Col>
                    <h5>Filter</h5>
                  </Col>
                  <Col>
                    <DatePicker
                    className="form-control"
                     dateFormat="dd.MM.yyyy"
                     showDisabledMonthNavigation
                     selected={this.state.startDate}
                     onChange={this.handleStartDate} />
                  </Col>
                  <Col>
                   <DatePicker
                   className="form-control"
                    dateFormat="dd.MM.yyyy"
                    showDisabledMonthNavigation
                    selected={this.state.endDate}
                    onChange={this.handleEndDate} />
                  </Col>

                </Row>
               </FormGroup>
            </Form>
            </CardHeader>
            <ListGroup>
              {data.map((post, idx) =>{
                  return (
                      <ListGroupItem className={`toggler${idx}`} key={idx}>
                        <Row>
                            <Col>
                              <h5 >
                                {post && post.title}
                              </h5>
                            </Col>

                            <Col>
                              <h5 >
                                From {post && (this.getHumanFormat(post.start_ts).toString())}
                              </h5>
                            </Col>
                            <Col>
                              <h5 >
                                To {post && (this.getHumanFormat(post.end_ts).toString())}
                              </h5>
                            </Col>
                            <Col>
                              <Button >
                                Delete
                              </Button>
                            </Col>
                        </Row>
                        <UncontrolledCollapse toggler={`.toggler${idx}`}>
                          <Card>
                            <CardBody>
                              {post && post.description}
                            </CardBody>
                          </Card>
                        </UncontrolledCollapse>
                      </ListGroupItem>
                  )
                })
              }
            </ListGroup>
            </Col>
          </Row>
        </Container>
        </header>
      </div>
    );
  }
}

export default EventsList;
