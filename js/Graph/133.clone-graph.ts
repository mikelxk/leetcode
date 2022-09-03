function cloneGraph(node: Node | null): Node | null {
    let visited={}
	function dfs(node) {
        if (!node) {
            return node
        }
        if (visited[node.val]) {
            return visited[node.val]
        }
        const copy = new Node(node.val)
        visited[node.val] = copy
        node.neighbors.forEach(n => {
            copy.neighbors.push(dfs(n))
        });
        return copy
    }
    return dfs(node)
};