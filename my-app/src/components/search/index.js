import { Component } from 'react';
import Gif from '../gif';

class Search extends Component {
  state = { text: '', data: [] }

  handleChange = (event) => this.setState({ text: event.target.value })
  getGif = async () => {
    const giphy_secret_key = process.env.REACT_APP_GIPHY_KEY;
    const gifs = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${giphy_secret_key}&q=${this.state.text}&limit=12`)
      .then(response => response.json());
    this.setState({ data: gifs.data });
  }

  render() {
    return (
      <>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.getGif}>Search</button>
        {
          (this.state.data.length > 0) && (
            this.state.data.map(
              gif => {
                return(
                  <Gif url={gif.images.original.url} title={gif.title} key={gif.id} />
                );
              }
            )
          )
        }
      </>
    )
  }
}

export { Search }