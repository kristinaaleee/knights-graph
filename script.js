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

function internalMoves (start, end){
    let visited = {};
    let queue = [];
    let results = {};

    visited[start] = true;
    queue.push(start);

    // Initialize first element of results object with root
    results[start] = [start];

    while(queue.length) {
        let queueElement = queue.shift();
        let getEdges = board.adjEdges.get(queueElement)
        
        for (let index in getEdges){
            let adj = getEdges[index];

            // Return when one of edges is the end goal
            if (adj === end){
                return results[queueElement].concat([adj])
            }

            // Check if edge has been visited
            if(!visited[adj]){
                visited[adj] = true;
                
                // Add property to results object - edge(key) : path(value)
                results[adj] = results[queueElement].concat([adj])
    
                queue.push(adj)
            }
        }
    }
}

// Outer function for output and formatting
function knightMoves (start, end){
    const result = internalMoves(JSON.stringify(start), JSON.stringify(end))
    console.log(`Task was completed in ${result.length - 1} moves. Here is the path: ${result}`)
}

// Build board with linked edges
let board = new Graph();
for (let i = 0; i < 8; i++){
    for (let j = 0; j < 8; j++){
        board.addVertex(`[${i},${j}]`);
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
                board.addEdge(`[${i},${j}]`, `[${dx},${dy}]`);
            }
        }
    }
}

knightMoves([0,0], [7,7])

