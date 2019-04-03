import React from 'react';
import {
    UncontrolledCollapse,
    CardBody,
    Card,
    CardHeader,
    Form,
    FormGroup,
    Button,
    ListGroup,
    ListGroupItem,
    Container,
    Row,
    Col } from 'reactstrap';
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

    return (
        <Container className="main_container">
          <Row>
            <Col>
            <CardHeader className="mainCardHeader listHeader">
            <Form>
               <FormGroup>
                <Row>
                  <Col sm={8}>
                  <h3>Events list</h3>
                  </Col>
                  <Col xs lg="2">
                    <DatePicker
                    className="form-control"
                     dateFormat="dd.MM.yyyy"
                     showDisabledMonthNavigation
                     placeholderText="Start date"
                     isClearable={true}
                     selected={dataPicker_api.startDate}
                     onChange={api_interface.handleStartDate} />
                  </Col>
                  <Col xs lg="2">
                   <DatePicker
                   className="form-control"
                    dateFormat="dd.MM.yyyy"
                    showDisabledMonthNavigation
                    placeholderText="End date"
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
                              <Button onClick={ ()=>{api_interface.deleteState(post.id)} } color="primary">
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
    );
  }
}

export default EventsList;
