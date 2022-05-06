import React from "react";
import { connect } from "react-redux";
import { fetchUserAction } from "../actions";

class UserList extends React.Component {
  componentDidMount() {
    this.props.fetchUserAction(this.props.userId);
  }

  render() {
    return <div>User:</div>;
  }
}
const getMyState = (state) => {
  return state;
};

export default connect(getMyState, { fetchUserAction })(UserList);
