class Graph {
    constructor(){
        this.adjEdges = new Map();
    }

    addVertex(a){
        this.adjEdges.set(a, [])
    }

    addEdge(a, b){
        this.adjEdges.get(a).push(b)

        // Undirected graph so add edge on both lists
        this.adjEdges.get(b).push(a)
    }
}

// create board function
function createBoard(){
    let board = new Graph()
    for (let i = 0; i < 8; i++){
        for (let j = 0; j < 8; j++){
            board.addVertex([i,j])
            board.addEdge([i,j],[i+2, j+1])
        }
    }
    return board;
}

console.log(createBoard());