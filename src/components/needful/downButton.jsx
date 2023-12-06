import "./needful.scss";

function DownButton({ children, postId }) {
  function downAnimate() {
    let down = document.getElementById("down" + postId);
    let downButton = document.getElementById(`downbutton` + postId);

    down.style.transition = "500ms";

    setTimeout(() => {
      down.style.top = "35px";
      down.style.color = "#f02d3a";
      downButton.style.borderColor = "#f02d3a";
    }, 200);

    setTimeout(() => {
      down.style.transition = "none";
      down.style.top = "-40px";
      down.style.fontWeight = 700;
    }, 450);

    setTimeout(() => {
      down.style.transition = "500ms";
      down.style.top = "18px";
    }, 600);

    setTimeout(() => {
      down.style.top = "14px";
    }, 1100);
  }

  return (
    <>
      <button
        onClick={() => downAnimate()}
        id={"downbutton" + postId}

        className="down reaction d-flex aic jcsb bg-black"
      >
        {children}
      </button>
    </>
  );
}

export default DownButton;
