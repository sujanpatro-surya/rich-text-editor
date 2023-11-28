import React, { Component } from "react";
import Trix from "trix";

class Wysiwyg extends React.Component {
  render() {
    return (
      <div>
        <input type="hidden" id="trix" />
        <trix-editor input="trix" />
      </div>
    );
  }
}

export default Wysiwyg;
