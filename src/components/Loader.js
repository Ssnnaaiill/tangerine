import React, { Component } from 'react';

class Loader extends Component {

  state = {
    text: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      text: ''
    });
  }

  readTextFile = (file) => {
    var rawFile = new XMLHttpRequest();
    if (file !== null) {
      rawFile.open('GET', file, false);
      rawFile.onreadystatechange = () => {
        if (rawFile.readyState === 4) {
          if (rawFile.status === 200 || rawFile.status === 0) {
            let allText = rawFile.responseText;
            this.setState({
              file: this.state.file,
              text: allText
            });
          }
        }
      }
      rawFile.send(null);
    }
  }

  componentDidMount() {
    this.readTextFile(localStorage.getItem('TEXTFILE'));
  }

  render() {
    const { handleSubmit } = this;
    const { text } = this.state;

    return (
      <div>
        <form onSubmit={handleSubmit}>
        <label>
          Upload file
          <input type="file" ref={this.FileInput} />
        </label>
        <br/>
        <button type="submit">submit</button>
        <Loader />
        </form>
        
      </div>
    );
  }
}

export default Loader;