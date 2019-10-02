import React, { Component } from 'react';
import Displayer from './Displayer';

class Loader extends Component {

  // file is null by default
  state = {
    text: ''
  }

  // get file object from disk
  handleChange = (e) => {
    e.preventDefault();

    let file = e.target.files[0];

    // check if file exists
    if (file) {
      let data = new FormData();
      data.append('file', file);
    } else {
      alert('File is not selected!');
    }

    this.readFile(file);
  }

  readFile = (file) => {
    let fileReader = new FileReader();
    fileReader.onload = () => {
      this.setState({
        text: fileReader.result
      });
    }
    fileReader.readAsText(file);
  }

  render() {
    const { handleChange } = this;
    const { text } = this.state;

    return (
      <div>
        <input type="file" onChange={handleChange}/>
        <Displayer text={text}/>
      </div>
    );
  }
}

export default Loader;