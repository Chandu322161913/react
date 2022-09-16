import React, { Component } from 'react'
import axios from 'axios';
import {Container, Row, Col, Card} from 'react-bootstrap';

//Global variable 
const url = `https://jsonplaceholder.typicode.com/photos?_start=0&_end=12`

export default class ReactBootstrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []  //empty
    }
  }

  render() {
    return (<>
      <div className="container text-center">
        <h4 className="py-3">REACT BOOTSTRAP UI PACKAGE IMPORT</h4>
        <Container>
          <Row>
            
            {
              this.state.photos.map((res, i) => {
                return (<Col lg={4} md={4} sm={6} xs={12}>

                  <Card className="my-2">
                    <Card.Img variant="top" className="w-50 mx-auto my-2" src={res.thumbnailUrl}/>
                    <Card.Body>
                      <Card.Title className="h6">{res.title}</Card.Title>
                      <a class="btn btn-primary" href={res.url} Target="_blank">Visit Site</a>
                    </Card.Body>
                  </Card>

                </Col>)
              })
            } 

          </Row>
        </Container>
      </div>
    </>)
  }
  componentDidMount() {
    axios.get(url).then((result)=>this.setState({ photos:result.data}));
  }
}