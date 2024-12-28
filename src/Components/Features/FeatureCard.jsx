const FeatureCard = ({ title, image, features }) => {
  return (
    <div
      style={{
        width: "400px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Header with slanted background */}
      <div
        style={{
          position: "relative",
          backgroundColor: "#22b378",
          color: "#fff",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        {title}
      </div>

      {/* Image */}
      <div
        style={{
          width: "100%",
          height: "180px",
          background: `url(${image}) center/cover no-repeat`,
          opacity: 0.5, // 50% opacity
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          padding: "15px",
          backgroundColor: "#fff",
          position: "relative",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            color: "#333",
            fontWeight: "bold", // Make features bold
            lineHeight: "1.8",
          }}
        >
          {features.map((item, index) => (
            <li
              key={index}
              style={{
                marginBottom: "10px",
                fontSize: "16px",
              }}
            >
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeatureCard;
