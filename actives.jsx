function Actives(props) {
  return (
    <a className="actives" href={"/" + props.link}>
      <img className="actives-img" src={props.img} alt={props.link} />
      <div className="actives-box">
        <p className="actives-name">{props.link}</p>
        <p className="actives-bio">{props?.bio}</p>
      </div>
    </a>
  );
}

export default Actives;
