import React from "react";
import { connect } from "react-redux";
import { fetchDataAction } from "../actions";
import UserList from "./UserList";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchDataAction();
  }
  renderList() {
    if (this.props.fetchData.data) {
      return this.props.fetchData.data.map((val) => {
        return (
          <div className="ui icon message" key={val.id}>
            <i className="user icon"></i>
            <div className="content">
              <h4 className="header">{val.title}</h4>
              <p>{val.body}</p>
              <UserList userId={val.userId} />
            </div>
          </div>
        );
      });
    } else {
      return <p>Loading...</p>;
    }
  }

  render() {
    console.log(this.props.fetchData);
    return <div style={{ marginTop: "20px" }}>{this.renderList()}</div>;
  }
}
const getMyState = (state) => {
  return state;
};

export default connect(getMyState, {
  fetchDataAction,
})(PostList);
