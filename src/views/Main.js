import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Api from '../Api.js';
import { Button, ListGroup, Collapse, ListGroupItem, Container, Row, Col, Badge } from 'react-bootstrap';
import { UncontrolledCollapse, CardBody, Card } from 'reactstrap';

class Main extends React.Component {
   constructor(props, context) {
    super(props, context);

    this.state = {
      data: [],
      open: false,
      accodeon: {
        item_0: false,
        item_1: false,
        item_2: false,
      }
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

  render() {
    console.log(this.state.data);
    const { open, accodeon } = this.state;

    return (
      <div className="App">
        <header className="App-header">
        <Container>
          <Row>
            <Col>
            <h3>Buttons </h3>
            <ListGroup>
              <ListGroupItem tag="button"
              color="primary" style={{ marginBottom: '1rem' }}
              // onClick={() => this.accordeonHandler({item_0: !accodeon.item_0})}
              // aria-controls="example-collapse-text"
              // aria-expanded={accodeon.item_0}
              >
               Cras justo odio
                <h5>
                  From <Badge variant="secondary">New</Badge>
                </h5>
                <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                  Toggle
                  </Button>
              </ListGroupItem>
              <UncontrolledCollapse toggler="#toggler">
                <Card>
                  <CardBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                    similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                    dignissimos esse fuga! Minus, alias.
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
              <ListGroupItem tag="button"
                action
                onClick={() => this.accordeonHandler({item_1: !accodeon.item_1})}
                aria-controls="example-collapse-text"
                aria-expanded={accodeon.item_1}
              >
                Dapibus ac facilisis in
                <h5>
                  Example heading <Badge variant="secondary">25.01.2019</Badge>
                </h5>
              </ListGroupItem>
              <Collapse in={this.state.accodeon.item_1}>
                <div id="example-collapse-text">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                  labore wes anderson cred nesciunt sapiente ea proident.
                </div>
              </Collapse>
              <ListGroupItem tag="button"
                action
                onClick={() => this.accordeonHandler({item_2: !accodeon.item_2})}
                aria-controls="example-collapse-text"
                aria-expanded={accodeon.item_2}
              >
                Morbi leo risus
                <h3>
                  Example heading <Badge variant="secondary">New</Badge>
                </h3>
              </ListGroupItem>
              <Collapse in={this.state.accodeon.item_2}>
                <div id="example-collapse-text">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                  labore wes anderson cred nesciunt sapiente ea proident.
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                  labore wes anderson cred nesciunt sapiente ea proident.
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                  labore wes anderson cred nesciunt sapiente ea proident.
                </div>
              </Collapse>
            </ListGroup>
            </Col>
          </Row>
        </Container>

        </header>
      </div>
    );
  }
}

export default Main;
