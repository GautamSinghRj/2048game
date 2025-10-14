import { useEffect, useRef } from "react";
import GameArea from "./components/gamearea"

function GameLogic(event) {
  let i = [0, 1, 2, 3]
  let j = [0, 1, 2, 3]
  let indexOne = Math.floor(Math.random() * 4);
  let indexTwo = Math.floor(Math.random() * 4);
  if (event.key == "ArrowUp") {
    alert("You pressed up arrow")
  }
  if (event.key == "ArrowLeft") {
    alert("You pressed left arrow")
  }
  if (event.key == "ArrowRight") {
    alert("You pressed right arrow")
  }
  if (event.key == "ArrowDown") {
    alert("You pressed down arrow")
  }
}

function App() {
  let score = 0;
  const divRef = useRef(null)

  useEffect(() => {
    divRef.current?.focus();
  }, [])

  return (
    <div className="flex flex-col justify-center items-center gap-8 h-screen" ref={divRef} tabIndex={0} onKeyDown={GameLogic}>
      <div className="text-5xl font-black text-[#9c8b7c]">
        2048
      </div>
      <GameArea />
      <div className="text-5xl font-light mt-8 text-[#9c8b7c]">
        {score}
      </div>
    </div>
  )
}

export default App
