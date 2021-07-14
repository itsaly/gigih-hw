import Gif from './components/gif';

function App() {
  const gif = {
    id: '4HrBfVJJveBNS9ytSk',
    title: 'Nintendo Plotting GIF by Gaming GIFs',
    uploadedDate: '2018-04-03 15:21:50',
    url: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/200w.gif?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=200w.gif&ct=g',
    webp: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/giphy.webp?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=giphy.webp&ct=g',
  }
  const giphy_secret_key = process.env.REACT_APP_GIPHY_KEY;
  console.log(giphy_secret_key);
  return (
    <div>
      <Gif title={gif.title} url={gif.url}/>
    </div>
  );
}

export default App;
