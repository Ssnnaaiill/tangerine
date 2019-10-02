import React, { Component } from 'react';
import Loader from './Loader';

class FileInput extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  state = {
    file: null
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Selected file - ${
        this.fileInput.current.files[0].name
      }`
    );
  }

  render() {
    const { handleSubmit } = this;
    const { file } = this.state;

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Upload file
          <input type="file" ref={this.FileInput} />
        </label>
        <br/>
        <button type="submit">submit</button>
        <Loader txt={file}/>
      </form>
    );
  }
}

export default FileInput;