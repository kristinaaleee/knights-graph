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

let board = new Graph();
for (let i = 0; i < 8; i++){
    for (let j = 0; j < 8; j++){
        board.addVertex(`[${i}, ${j}]`);
    }
}

let possibleX = [-2, -2, -1, -1, 1, 1, 2, 2];
let possibleY = [-1, 1, -2, 2, -2, 2, -1, 1 ];
for (let i = 0; i < 8; i++){
    for (let j = 0; j < 8; j++){
        for (let index = 0; index < 8; index++){
            let dx = i + possibleX[index];
            let dy = j + possibleY[index];

            if (dx > 0 && dx < 8 && dy > 0 && dy < 8 ){
                board.addEdge(`[${i}, ${j}]`, `[${dx}, ${dy}]`);
            }
        }
    }
}
 
console.log(board)

function knightMoves (start, end){
    let visited = {}
    let queue = [];

    visited[start] = true;
    queue.push(start);
    let queueElement;

    while(queueElement !== end) {
        queueElement = queue.shift();

        console.log(queueElement);

        let getEdges = board.adjEdges.get(queueElement)

        for (let index in getEdges){
            let adj = getEdges[index];
            
            if(!visited[adj]){
                visited[adj] = true;
                queue.push(adj)
            }
        }
    }
}

knightMoves ('[0, 0]', '[3, 3]')