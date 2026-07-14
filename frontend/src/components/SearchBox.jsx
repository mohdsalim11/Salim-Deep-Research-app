import "./SearchBox.css";

function SearchBox({ query, setQuery, research, loading }) {
  return (
    <section className="hero">

      <h1>Salim AI Research</h1>

      <p>
        Generate detailed research reports using
        AI-powered Search, Reader, Writer and Critic Agents.
      </p>

      <div className="search-box">

        <input
          type="text"
          placeholder="Enter your research topic..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button onClick={research} disabled={loading}>
          {loading ? "Researching..." : "🔍 Start Research"}
        </button>

      </div>

    </section>
  );
}

export default SearchBox;
