import React from "react";
// import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="modal" id="modal">
        <h2>Modal Window</h2>
        <form className="form-input">
          Assign To:
          <input type="text" placeholder="Assigned to...." />
          <br></br>
          Threat Level:
          <input type="text" placeholder="Threat level..." />
          <br></br>
          Description:
          <input type="text" placeholder="Description..." />
          <br></br>
          Report To:
          <input type="text" placeholder="Reporter..." />
          <br></br>
          <button type="submit">Submit</button>
        </form>
        <div className="actions">
          {/* <button className="toggle-button" onClick={this.props.onClose}>
            close
          </button> */}
        </div>
      </div>
    );
  }
}

export default Form;
