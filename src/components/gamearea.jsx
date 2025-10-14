export default function GameArea({ board }) {
    const size = board.length
    return (
        <div
            className={`w-96 h-96 grid gap-2 mt-12`}
            style={{
                gridTemplateColumns: `repeat(${size}, 1fr)`,
                gridTemplateRows: `repeat(${size}, 1fr)`
            }}
        >
            {
                board.map((row, i) =>
                    row.map((cell, j) => (
                        <div
                            key={`${i}${j}`}
                            className={`flex w-full h-auto justify-center items-center text-2xl font-bold rounded-2xl shadow-xl transition-all duration-10 
                            ${cell === 0 ? "bg-[#bdac97]" :
                                    cell === 2 ? "bg-[#eee4da]" :
                                        cell === 4 ? "bg-[#ede0c8]" :
                                            cell === 8 ? "bg-[#f2b179] text-white" :
                                                cell === 16 ? "bg-[#f59563] text-white" :
                                                    cell === 32 ? "bg-[#f67c5f] text-white" :
                                                        cell === 64 ? "bg-[#f65e3b] text-white" : "bg-[#edcf72] text-white"
                                }`}>
                            {cell !== 0 ? cell : ""}
                        </div>
                    )))
            }
        </div>
    );
}