import { useState } from "react";
import { Input, Button } from "antd";
import Standard from "./Standard";
import { Room } from "./types/index";
import Double from "./Double";
import King from "./King";

interface RoomSearchProps {
  rooms: Room[];
}

interface RoomSearchProps {
  d: Room[];
}

interface RoomSearchProps {
  k: Room[];
}

const RoomSearch = ({ rooms, d, k }: RoomSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRooms, setFilteredRooms] = useState<Room[]>(rooms);
  const [filteredDouble, setFilteredDouble] = useState<Room[]>(d);
  const [filteredKing, setFilteredKing] = useState<Room[]>(k);

  const handleSearch = () => {
    const filtered = rooms.filter((rooms) => rooms.id === Number(searchTerm));
    const filteredD = d.filter((d) => d.id === Number(searchTerm));
    const filteredK = k.filter((k) => k.id === Number(searchTerm));
    setFilteredRooms(filtered);
    setFilteredDouble(filteredD);
    setFilteredKing(filteredK);
  };

  return (
    <>
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button onClick={handleSearch} style={{ top: "-32px", left: "435px" }}>
        Search
      </Button>
      <div className="table">
        <div className="Standards"> Standard</div>
        <Standard rooms={filteredRooms} />
      </div>

      <div className="table">
        <div className="Doubles"> Double</div>
        <Double d={filteredDouble} />
      </div>

      <div className="table">
        <div className="Kings"> King</div>
        <King k={filteredKing} />
      </div>
    </>
  );
};
export default RoomSearch;
