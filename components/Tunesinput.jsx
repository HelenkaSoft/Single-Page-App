import { useState } from "react";
const Tunes = () => {
  const [search, setsearch] = useState("");

  const handlesearch = (e) => {
    setsearch(e.target.value);
  };
};

const handlesubmit = (e) => {
  e.preventDefault();
  setsongs([]);
};

function TunesInput() {
  return (
    <form onSubmit={handlesubmit}>
      <input type="text" value={search} onChange={handlesearch} />
    </form>
  );
}

export default TunesInput;
