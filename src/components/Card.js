function Card({ id, name, email }) {
  return (
    <div className="card">
      <img src={`https://robohash.org/${id}.png?size=200x200`} alt="" />
      <div className="content">
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
