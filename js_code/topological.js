function isCyclic(visited, graph, index) {
    if (visited[index] == 2) return true;
    const neighbor = graph.get(index) || []
    for (let n of neighbor) {
        if (visited[n] !== 1) {
            if (isCyclic(visited, graph, n)) {
                return true
            }
        }

    }
    visited[index] = 1
    return false
}

const isCyclic = (graph, visited, index) => {
    if (visited[index] == 2) return true;
    visited[index] = 2;
    const neighbours = graph.get(index) || [];
    for (let n of neighbours) {
        if (visited[n] != 1) {
            if (isCyclic(graph, visited, n)) return true;
        }
    }
    visited[index] = 1;
    return false;
}

var canFinish = function (numCourses, prerequisites) {
    // 0 unvisited
    // 1 processed
    // 2 processing
    const graph = new Map()
    const visited = new Array(numCourses).fill(0)
    for (let [course, dependency] of prerequisites) {
        graph.set(course, (graph.get(course) || new Set()).add(dependency))
    }
    for (let i = 0; i < numCourses; i++) {
        if (visited[i] == 0) {
            if (isCyclic(visited, graph, i)) {
                return false
            }
        }
    }
    return true
};

console.log(canFinish(2, [[1, 0], [0, 1]]))


