import React from "react";
import Form from "./Form.jsx";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onClose = this.onClose.bind(this);
  }

  onClose(e) {
    this.props.showModal(e);
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        <Form onClose={this.onClose} />
        <div>
          {/* <button
            onClick={e => {
              this.props.showModal(e);
            }}
          >
            Close
          </button> */}
        </div>
      </div>
    );
  }
}

export default Modal;
