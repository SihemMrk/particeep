import React, { Component } from "react";

// import { fetchData } from "../store";
// import { connect } from "react-redux";

import SimpleCard from "./card";
class ChartData extends Component {
  // async componentDidMount() {
  //   await this.props.fetchData();
  // }
  render() {
    const data = this.props.dataSource;
    console.log(data, "DATA");
    return <SimpleCard />;
  }
}

// const mapStateToProps = state => ({
//   dataSource: state.dataSource
// });

// const mapDispatchToProps = dispatch => ({
//   fetchData: () => dispatch(fetchData())
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ChartData);

export default ChartData;
