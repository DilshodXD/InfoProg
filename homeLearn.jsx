import './component.scss'

function HomeLearnLink({img, title, text}) {
  return ( 
    <div className="learn-link">
      <img src={img} className="learn-link-img" />
      <div className="learn-link-bottom">
        <p className="learn-link-title">{title}</p>
        <p className="learn-link-text">{text}</p>
      </div>
    </div>
   );
}

export default HomeLearnLink;