function HoverButton({ children, fontSize, fontWeight, padding, color}) {
  return (
    <button
      style={{
        color: color,
        fontSize: fontSize,
        fontWeight: fontWeight,
        padding: `${padding[0]}px ${padding[1]}px`,
      }}
      className="hoverButton"
    >
      {children}
    </button>
  );
}

export default HoverButton;
