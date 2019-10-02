import React, { Component } from 'react';

class Loader extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    
    let file = this.fileInput.current.files[0];
    let fileReader = new FileReader();
    
    fileReader.onload = () => {
      console.log(fileReader.result);
    };
    fileReader.readAsText(file);

    if (file.name !== null) {
      console.log(this.state.text);
      alert(`${file.name}`);
      this.setState({
        text: file
      });

      console.log(this.state.text);

    } else {
      alert('Text file is not selected');
    }
  }

  render() {
    const { handleSubmit } = this;

    return (
      <div className="Loader">
        <form onSubmit={handleSubmit}>
          <input type="file"/>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default Loader;