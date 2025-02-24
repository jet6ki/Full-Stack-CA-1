const ServiceCard = ({ title, description }) => {
    return (
      <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", borderRadius: "5px" }}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  };
  
  export default ServiceCard;