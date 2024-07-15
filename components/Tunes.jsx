import { useState } from "react";
import TunesList from "./Tuneslist";

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
      <TunesList songs={songs} name="Dodo" />
    </div>
  );
};

export default Tunes;
