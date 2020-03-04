import React from "react";
import Nav from "./Nav.jsx";
import BugTile from "./BugTile.jsx";
import exampleData from "../example-data/exampleData";
import Modal from "./Modal.jsx";
import Form from "./Form.jsx";

import "../styles/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: "None",
      bugs: exampleData,
      show: false
    };
    this.filterHandler = this.filterHandler.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  filterHandler(filter) {
    this.setState({ filter }, () =>
      this.setState({
        bugs: exampleData.filter(bug => bug.threatLevel === this.state.filter)
      })
    );
  }

  showModal(e) {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div className="App">
        <table>
          <Nav filterHandler={this.filterHandler} />
          {this.state.bugs.map(bug => (
            <BugTile
              bugName={bug.bugName}
              bugDescription={bug.bugDescription}
              reportedBy={bug.reportedBy}
              createdDate={bug.createdDate}
              assignedTo={bug.assignedTo}
              threatLevel={bug.threatLevel}
              filter={this.state.filter}
              key={bug.bugName}
            />
          ))}
        </table>

        <div className="modal-container">
          <button
            onClick={e => {
              this.showModal();
            }}
          >
            Show Modal
          </button>
          <Modal showModal={this.showModal} show={this.state.show}>
            <Form />
          </Modal>
        </div>
      </div>
    );
  }
}

export default App;
