import { useEffect, useRef, useState } from "react";
import GameArea from "./components/gamearea"
import BoardCreation, { move } from "./utils/gamelogic";


export default function App() {
  const [size, setSize] = useState(4)
  const [score, setScore] = useState(0)
  const [board, setBoard] = useState(BoardCreation(size))

  const handleKey = (event) => {
    if (["ArrowUp", "ArrowLeft", "ArrowRight", "ArrowDown"].includes(event.key)) {
      const newBd = move(board, event.key);
      setBoard(newBd)
      setScore(score + 2)
    }
  }

  const restart = (newSize=size) => {
    setBoard(BoardCreation(newSize))
    setScore(0)
  }
  const divRef = useRef(null)

  useEffect(() => {
    divRef.current?.focus();
  }, [])

  useEffect(()=>{
    restart(size)
  },[size])

  return (
    <div className="flex flex-col justify-center items-center gap-8 h-screen" ref={divRef} tabIndex={0} onKeyUp={handleKey}>
      <div className="text-5xl font-black text-[#9c8b7c]">
        2048
      </div>
      <div className="flex items-center gap-3">
        <label className="text-[#9c8b7c] text-xl font-semibold">Board Size:</label>
        <input
          type="number"
          min="3"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))
          }
          className="w-20 text-center text-2xl text-[#9c8b7c] bg-[#f5efe6] border-2 border-[#bdac97] rounded-2xl shadow-md outline-none focus:ring-2 focus:ring-[#9c8b7c] transition-all duration-200"
        />
      </div>
      <GameArea board={board} />
      <div className="text-5xl font-light mt-8 text-[#9c8b7c]">
        {score}
      </div>
      <button
        onClick={()=>restart(size)}
        className="px-8 py-4 bg-[#9c8b7c] text-white text-xl rounded-xl hover:bg-[#837567]"
      >
        Retry
      </button>
    </div>
  )
}

