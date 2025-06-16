const MyLogo = ({ color = "white", width = 200, height = 200 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 200 200">
      <path
        d="M 10 190 L 50 10 L 90 190 L 130 10 L 170 190"
        stroke={color}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MyLogo;
