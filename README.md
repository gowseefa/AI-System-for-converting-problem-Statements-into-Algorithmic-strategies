
## AI System for Converting Problem Statements into Optimal Algorithmic Strategies

## Overview
This project is an AI-powered system that automatically analyzes competitive programming problem statements and converts them into structured, explainable algorithmic strategies.

Developed for the AI for Bharat Hackathon (Powered by AWS).

---

## Features
- Automatic problem classification (Graph, Dynamic Programming, Greedy, Searching, etc.)
- Constraint extraction and feasibility analysis
- Similarity matching with solved problems
- Time and space complexity validation
- Explainable algorithm recommendation

---

## System Workflow
1. User submits a problem statement.
2. NLP processing extracts keywords and constraints.
3. Machine learning model classifies the problem type.
4. Constraint reasoning filters infeasible algorithms.
5. Similarity engine retrieves related patterns.
6. System generates and recommends the optimal algorithmic strategy.

---

## AWS Services Used
- Amazon SageMaker (Model training and deployment)
- Amazon Comprehend (NLP processing)
- Amazon DynamoDB (Data storage)
- Amazon S3 (Model and dataset storage)
- AWS EC2 (Backend hosting)

---

## Tech Stack
- Python (FastAPI Backend)
- React.js (Frontend)
- Scikit-learn / PyTorch (Machine Learning)
- Sentence Transformers (Embeddings)
- FAISS (Similarity Search)

---

## Cost Optimization
- Designed to operate within AWS Free Tier
- Models trained once and reused
- Minimal compute and storage usage

---

## Team
Team Name: HackFusion  
Team Leader: SK. Gowseefa
