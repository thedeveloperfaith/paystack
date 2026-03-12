import "./Reflex.css";

const Card = ({ data }) => {
  const features = data?.features || [];
  const isVideo = data?.image?.endsWith(".mp4");

  return (
    <div
      className="card_body"
      style={{ flexDirection: data?.position || "row" }}
    >
      <div className="card_image">
        {isVideo ? (
          <video src={data.image} autoPlay loop muted />
        ) : (
          <img src={data.image} alt={data.title} />
        )}
      </div>

      <div className="card_content">
        <h2>{data.title}</h2>
        <h4>{data.description}</h4>

        <div className="map_features">
          {features.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;