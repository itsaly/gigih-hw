const Gif = ({url, title}) => {
  return (
    <div>
      <input type="text" />
      <input type="submit" value="Search" />
      <br />
      <p>{title}</p>
      <img src={url} alt={title}/>
    </div>
  )
};

export default Gif;