import React from "react";
import "./LogOutPopUp.css";

class LogOutPopUp extends React.Component {
  onClickHandler = e => {
    if (e.target.name === "cancel-button") {
      this.props.showLogOutPopUp(false);
    } else if (e.target.name === "logout-button") {
      this.props.logOut();
    }
  };

  render() {
    return (
      <div className="logout-popup-container">
        <div className="logout-popup">
          <button
            className="logout-button"
            name="logout-button"
            onClick={this.onClickHandler}
          >
            Log Out
          </button>
          <button
            className="cancel-button"
            name="cancel-button"
            onClick={this.onClickHandler}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default LogOutPopUp;
