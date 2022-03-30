function Avatar({ image, firstName, lastName }) {
  return (
    <figure className="d-flex flex-column">
      <img src={image} alt={firstName} />
      <figcaption>
        {firstName}
        <br />
        {lastName}
      </figcaption>
    </figure>
  );
}

export default Avatar;
