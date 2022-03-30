import "./App.css";
import AvatarList from "./AvatarList";

const bart = {
  image:
    "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
  firstName: "Bart",
  lastName: "Simpson",
};
const lisa = {
  image:
    "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
  firstName: "Lisa",
  lastName: "Simpson",
};
const maggy = {
  image:
    "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
  firstName: "Maggy",
  lastName: "Simpson",
};

const clones = [bart, lisa, maggy];

function App() {
  return <AvatarList dataArray={clones} />;
}

export default App;
