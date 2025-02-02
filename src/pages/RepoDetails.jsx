import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function RepoDetails() {
  const { id } = useParams();
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRepoDetails() {
      try {
        const response = await axios.get(`https://api.github.com/repositories/${id}`);
        setRepo(response.data);
      } catch (err) {
        setError("Failed to fetch repository details");
      } finally {
        setLoading(false);
      }
    }
    fetchRepoDetails();
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  // Extracting owner details
  const { owner } = repo;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold">{repo.name}</h1>
      <p className="text-gray-400">{repo.description}</p>
      <p className="text-gray-300">Language: {repo.language || "N/A"}</p>
      <div className="mt-2">
        <span>⭐ {repo.stargazers_count}</span>
        <span className="ml-4">🍴 {repo.forks_count}</span>
      </div>
      
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Owner Details</h3>
        <div className="flex items-center mt-2">
          <img src={owner.avatar_url} alt={owner.login} className="w-20 h-20 rounded-full mr-4" />
          <div>
            <p className="font-semibold">{owner.login}</p>
            <a href={owner.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">View Profile</a>
          </div>
        </div>
      </div>

      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline mt-4 block">View on GitHub</a>
    </div>
  );
}
