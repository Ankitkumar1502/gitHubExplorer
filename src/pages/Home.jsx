import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const API_URL = "https://api.github.com/search/repositories?q=stars:>1000&sort=stars&order=desc";
export default function Home() {
    const [repos, setRepos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [language, setLanguage] = useState("JavaScript");
    const [sortBy, setSortBy] = useState("stars");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetchRepos();
    }, [language, sortBy]);
  
    const fetchRepos = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${API_URL}&language=${language}&sort=${sortBy}`);
        setRepos(response.data.items);
      } catch (err) {
        setError("Failed to fetch repositories");
      } finally {
        setLoading(false);
      }
    };
  
    const filteredRepos = repos.filter(repo =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className="min-h-screen text-white p-4">
        <h1 className="text-3xl font-bold text-center"></h1>
        <div className="flex flex-col md:flex-row gap-4 my-4 justify-center">
          <input
            type="text"
            placeholder="Search repositories..."
            className="p-2 bg-gray-700 rounded w-full md:w-1/3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select className="p-2 bg-gray-700 rounded" value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="C++">C++</option>
          </select>
          <select className="p-2 bg-gray-700 rounded" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="stars">Stars</option>
            <option value="forks">Forks</option>
          </select>
        </div>
  
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRepos.map((repo) => (
            <div key={repo.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold">{repo.name}</h2>
              <p className="text-sm text-gray-400">{repo.description}</p>
              <p className="text-sm text-gray-300">Language: {repo.language || "N/A"}</p>
              <div className="flex justify-between mt-2 text-sm">
                <span>⭐ {repo.stargazers_count}</span>
                <span>🍴 {repo.forks_count}</span>
              </div>
              <Link to={`/repo/${repo.id}`} className="text-blue-400 underline block mt-2">View Details</Link>
            </div>
          ))}
        </div>
      </div>
    );
  }