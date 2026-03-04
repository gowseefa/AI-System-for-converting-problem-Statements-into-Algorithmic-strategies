const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Mock algorithm analysis logic (similar to frontend)
const getAnalysisForProblem = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes('shortest path')) {
        return {
            best_algorithm: {
                name: "Dijkstra's Algorithm",
                time_complexity: "O(E log V)",
                space_complexity: "O(V)",
                explanation: "For weighted graphs, Dijkstra's is the most reliable strategy if all edges are positive."
            },
            possible_algorithms: ["BFS", "Dijkstra", "Bellman-Ford", "Floyd-Warshall"]
        };
    } else if (lower.includes('subset')) {
        return {
            best_algorithm: {
                name: "Dynamic Programming",
                time_complexity: "O(N * Sum)",
                space_complexity: "O(Sum)",
                explanation: "The 0/1 Knapsack style DP is optimal for matching exact subset sums within standard memory limits."
            },
            possible_algorithms: ["Backtracking", "DP", "Meet-in-the-Middle"]
        };
    } else {
        return {
            best_algorithm: {
                name: "Hash Map Cache",
                time_complexity: "O(N)",
                space_complexity: "O(N)",
                explanation: "A simple linear scan with a Hash Map for caching results handles most sequence-based search problems."
            },
            possible_algorithms: ["Brute Force", "Sorting", "Two Pointers", "Hash Map"]
        };
    }
};

app.post('/analyze', (req, res) => {
    const { problemText } = req.body;

    if (!problemText) {
        return res.status(400).json({ error: "Problem text is required." });
    }

    console.log(`Analyzing problem: ${problemText.substring(0, 50)}...`);
    const analysis = getAnalysisForProblem(problemText);

    // Simulate thinking delay
    setTimeout(() => {
        res.json(analysis);
    }, 800);
});

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});
