export default function BoardCreation(size = 4) {
    let board = Array(size).fill().map(() => Array(size).fill(0))
    randomTile(board);
    randomTile(board);
    return board;
}
export function checkZeroes(board) {
    return board.some(row => row.includes(0))
}

export function checkMerge(board) {
    const size = board.length;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (j < size - 1 && board[i][j] === board[i][j + 1]) return true;
            if (i < size - 1 && board[i][j] === board[i + 1][j]) return true;
        }
    }
    return false;
}

export function isGameOver(board) {
    if (checkZeroes(board)) return false;
    if (checkMerge(board)) return false;
    return true
}


export function randomTile(board) {
    const emptyTiles = []

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === 0) emptyTiles.push([i, j])
        }
    }

    if (board.length === 0) return;

    const [x, y] = emptyTiles[Math.floor(Math.random() * emptyTiles.length)]
    board[x][y] = Math.random < 0.9 ? 4 : 2
}

export function moveLeft(board) {
    let newBd = board.map((row) => {
        let filterRow = row.filter(r => r !== 0)
        for(let i=0;i<filterRow.length-1;i++){
            if(filterRow[i]===filterRow[i+1]){
                filterRow[i]*=2
                filterRow[i+1]=0
            }
        }
        filterRow=filterRow.filter(r=>r !== 0)
        while(filterRow.length<board.length)filterRow.push(0)
        return filterRow
    })
    return newBd
}

export function switchRight(m){
    return m[0].map((_,col)=>m.map((row)=>row[col]).reverse())
}

export function switchLeft(m){
    return m[0].map((_,col)=>m.map((row)=>row[m.length - 1 - col]))
}


export function move(board, key) {
    let bd = board.map((row) => [...row])

    if (key == "ArrowLeft") {
        bd = moveLeft(bd)
    }

    if (key == "ArrowRight") {
        bd= switchRight(switchRight(moveLeft(switchRight(switchRight(bd)))))
    }

    if (key == "ArrowDown") {
        bd=switchLeft(moveLeft(switchRight(bd)))
    }

    if (key == "ArrowUp") {
        bd=switchRight(moveLeft(switchLeft(bd)))
    }
    randomTile(bd)
    return bd;
}
