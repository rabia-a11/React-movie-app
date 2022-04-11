import Header from "./Header";
import AvatarList from "./AvatarList";
import IndividualCharacter from "./IndividualCharacter";
import Pagination from "./Pagination";
import Search from "./Search";

import DataContext from "./DataContext";
import { useContext } from "react";
import "./App.css";
import Loading from "./Loading";

function App() {
  const { loading, currentCharacters, showIndividual } = useContext(DataContext);
  return (
    <>
      <Header />
      <Search />
      {showIndividual ? (
        <IndividualCharacter />
      ) : loading ? (
        <Loading />
      ) : (
        <AvatarList />
      )}
      {currentCharacters.length < 10 ? null : !showIndividual ? <Pagination /> : null}
    </>
  );
}

export default App;

