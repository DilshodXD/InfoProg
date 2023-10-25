import "./needful.scss"

function TopButtun({ children, index }) {
  function upAnimate(index) {
    let up = document.getElementById(`up${index}`);
    let upButton = document.getElementById(`up${index}button`);
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
        onClick={() => upAnimate(index + 1)}
        id={"up" + (index + 1) + "button"}
        className="up reaction d-flex aic jcsb bg-black"
      >
        {children}
      </button>
    </>
  );
}

export default TopButtun;
