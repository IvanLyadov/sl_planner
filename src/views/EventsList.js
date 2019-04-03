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
    let {data, api_interface, dataPicker_api} = this.props;
    console.log('dataPicker_api', dataPicker_api);

    return (
      <div className="App">
        <header className="App-header">
        <Container className="main_container">
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
                     isClearable={true}
                     selected={dataPicker_api.startDate}
                     onChange={api_interface.handleStartDate} />
                  </Col>
                  <Col>
                   <DatePicker
                   className="form-control"
                    dateFormat="dd.MM.yyyy"
                    showDisabledMonthNavigation
                    isClearable={true}
                    selected={dataPicker_api.endDate}
                    onChange={api_interface.handleEndDate} />
                  </Col>
                  <Col>

                  </Col>
                </Row>
               </FormGroup>
            </Form>
            </CardHeader>
            <ListGroup className="list-wrapper">
              <ListGroupItem>
                <Row>
                <Col>
                  <h5>
                    Title
                  </h5>
                </Col>

                <Col>
                  <h5>
                    Start time
                  </h5>
                </Col>
                <Col>
                  <h5>
                    End time
                  </h5>
                </Col>
                <Col>

                </Col>
            </Row>
              </ListGroupItem>

              {data.map((post, idx) =>{
                  return (
                      <ListGroupItem key={idx} className="list-wrapper">
                        <Row>
                            <Col>
                              <span className={`list-item toggler${idx}`}>
                                {post && post.title}
                              </span>
                            </Col>

                            <Col>
                              <span className={`list-item toggler${idx}`}>
                                {post && (api_interface.getHumanFormat(post.start_ts).toString())}
                              </span>
                            </Col>
                            <Col>
                              <span className={`list-item toggler${idx}`}>
                                {post && (api_interface.getHumanFormat(post.end_ts).toString())}
                              </span>
                            </Col>
                            <Col>
                              <Button onClick={ ()=>{api_interface.deleteState(post.id)} }>
                                Delete
                              </Button>
                            </Col>
                        </Row>
                        <UncontrolledCollapse toggler={`.toggler${idx}`}>
                          <Card className="list-toggler">
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
