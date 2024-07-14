import { useState } from "react";

const Tunes = () => {
  const [search, setsearch] = useState("");

  const handlesearch = (e) => {
    setsearch(e.target.value);
  };

  const [songs, setsongs] = useState([
    { id: 2, artist: "Samco", name: "dodo" },
    {
      id: 1,
      artist: "Sk made",
      name: "peter",
    },
    {
      id: 3,
      artist: "Bengoro",
      name: "tom",
    },
  ]);

  const handlesubmit = (e) => {
    e.preventDefault();
    setsongs([...songs, newSong]);
  };

  const newSong = {
    id: Math.max(...songs.map((n) => n.id)) + 1,
    name: search,
    artist: search,
  };

  //
  return (
    <div className="home">
      <h1>Tunes</h1>
      <form onSubmit={handlesubmit}>
        <input type="text" value={search} onChange={handlesearch} />
      </form>
      <ul>
        {songs.map((e) => (
          <li key={e.id}>{JSON.stringify(e)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tunes;
