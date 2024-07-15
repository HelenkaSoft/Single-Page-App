function TunesList(props) {
  const songs = props.songs;
  const meno = props.name;
  return (
    <div>
      <ul>
        {songs.map((e) => (
          <li key={e.id}>{JSON.stringify(e)}</li>
        ))}
      </ul>
      <p>{meno}</p>
    </div>
  );
}

export default TunesList;
