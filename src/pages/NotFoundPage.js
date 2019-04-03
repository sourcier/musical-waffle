import React from "react";
import { Hero } from "../components/Hero";

export class NotFoundPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Hero title="oops!" subTitle="Page could not be found" />
      </React.Fragment>
    );
  }
}
