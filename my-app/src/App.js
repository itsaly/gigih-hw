// import Gif from './components/gif';
// import data from './data/gif';
import { Search } from './components/search';

function App() {
  const giphy_secret_key = process.env.REACT_APP_GIPHY_KEY;
  console.log(giphy_secret_key);
  // const filterGif = data.filter(image => image.rating === "g");
  // const showGif = filterGif.map(image => <Gif title={image.title} url={image.url} key={image.id}/>);
  return (
    <div>
      {/* {showGif} */}
      <Search />
      {/* {
        data.map(image => {
          return(
            (image.rating === "g") && (
              <Gif title={image.title} url={image.url} key={image.id}/>
            )
          )
        })
      } */}
    </div>
  );
}

export default App;
