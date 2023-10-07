function Actives(props) {
  function twiter() {
    return (
      <a className="x-twiter" href={`https://twitter.com/${props.xLink}`}>
        <i
          class="fa-brands fa-square-x-twitter fa-2xl x-twiter-icon"
          style={{ color: "#000000" }}
        ></i>
      </a>
    );
  }
  console.log(props.xLink);

  return (
    <a className="actives" href={"/" + props.link}>
      <div className="actives-top">
        <img className="actives-img" src={props.img} alt={props.link} />
        <div className="actives-link">
          <p className="actives-name">{props.name}</p>
          <p className="actives-userName">@{props.link}</p>
        </div>
        {props.xLink ? (
          <a className="x-twiter" href={`https://twitter.com/${props.xLink}`}>
            <i
              class="fa-brands fa-square-x-twitter fa-2xl x-twiter-icon"
              style={{ color: "#000000" }}
            ></i>
          </a>
        ) : (
         null
        )}
      </div>
      <hr className="actives-hr" />
      <p className="actives-bio">{props?.bio}</p>
    </a>
  );
}

export default Actives;
