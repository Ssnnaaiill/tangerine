import React, { Component } from 'react';
import Displayer from './Displayer';

class Loader extends Component {

  // file is null by default
  state = {
    name: '...',
    text: ''
  }

  // get file object from disk
  handleChange = (e) => {
    
    let file = e.target.files[0];

    // check if file exists
    if (file) {
      this.setState({
        name: file.name
      });

      let data = new FormData();
      data.append('file', file);

      this.readFile(file);
    } else {
      alert('File is not selected!');
    }
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
    const { name, text } = this.state;

    return (
      <>
      <section id="loader">
        <label htmlFor="get-file">불러오기</label>
        <input type="file" id="get-file" onChange={handleChange}/>
      </section>
      {
        name === '' || text === '' ? <></> :<Displayer name={name} text={text}/>
      }
      </>
    );
  }
}

export default Loader;