
import './App.css';
import FullName from "./profile/profilComponet/FullName";
import Bio from "./profile/profilComponet/Bio";
import Profession from "./profile/profilComponet/Profession";
import Fotter from "./profile/profilComponet/Fotter";
import ActionLink  from "./profile/profilComponet/ActionLink";
function App() {

  return (
    <div className="App">
      <FullName esm="Jasser Heni "  about="About" />
      <Bio/>
      <Profession/>
      <ActionLink  alert ="this is my profile"/>
      <Fotter/>
    </div>
  );
}

export default App;
