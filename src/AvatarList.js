import { useContext } from "react";
import Avatar from "./Avatar";
import DataContext from "./DataContext";
const AvatarList = () => {
  const {currentCharacters, error} = useContext(DataContext);

  return (
    <div className="character-list-container">
      {currentCharacters.length === 0 ? <h2>{error}</h2> :
        currentCharacters.map( character => (
          <Avatar key={character.char_id} data={character} />
        ))}
    </div>
  );
};

export default AvatarList;