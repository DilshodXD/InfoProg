import "./needful.scss";

function TopButtun({ children, postId }) {
  function upAnimate() {
    let up = document.getElementById("up" + postId);
    let upButton = document.getElementById(`upbutton`);
    up.style.transition = "500ms";

    setTimeout(() => {
      up.style.top = "-10px";
      up.style.color = "#38b000";
      upButton.style.borderColor = "#38b000";
    }, 200);

    setTimeout(() => {
      up.style.transition = "none";
      up.style.top = "50px";
      up.style.fontWeight = 700;
    }, 450);

    setTimeout(() => {
      up.style.transition = "500ms";
      up.style.top = "10px";
    }, 600);

    setTimeout(() => {
      up.style.transition = "300ms";
      up.style.top = "14px";
    }, 1100);
  }

  return (
    <>
      <button
        onClick={() => upAnimate()}
        id={"upbutton"}
        className="up reaction d-flex aic jcsb bg-black"
      >
        {children}
      </button>
    </>
  );
}

export default TopButtun;
