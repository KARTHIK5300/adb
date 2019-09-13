import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

class List extends Component {
  render() {
    const { db } = this.props;
    return (
      <Fragment>
        <div className="List">
          <Row>
            {db.map((item, i) => (
              <Col xs="6" sm="4" key={i}>
                <Link to={`details`}>
                  <Card>
                    <CardImg top width="100%" src={item.image_url} />
                    <CardBody>
                      <CardTitle>{item.title}</CardTitle>
                      <CardText className="synopsis">{item.synopsis}</CardText>
                    </CardBody>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default List;
