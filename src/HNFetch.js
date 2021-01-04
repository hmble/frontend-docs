import { useState, useEffect, Fragment } from "react";

export function DummyFetch() {
  const [query, setQuery] = useState("redux");
  const [url, setUrl] = useState("");
  const [data, setData] = useState({ hits: [] });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setData({ hits: data.hits });
      setLoading(false);
    }
    fetchData();
  }, [url]);
  return (
    <>
      <h1>{loading ? "loading" : null}</h1>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button
        type="button"
        onClick={() =>
          setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
        }
      >
        Search
      </button>

      {data.hits.map((item) => (
        <li key={item.objectID}>{item.title}</li>
      ))}
    </>
  );
}
function HNFetch() {
  const [data, setData] = useState({ hits: [] });
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("redux");
  const [url, setUrl] = useState(
    "https://hn.algolia.com/api/v1/search?query=redux"
  );

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const resp = await fetch(url);
      const result = await resp.json();

      setData({ hits: result.hits });
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return (
    <Fragment>
      <h1>{loading ? "Loading" : null}</h1>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button
        type="button"
        onClick={() =>
          setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
        }
      >
        Search
      </button>

      <ul>
        {data.hits.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default HNFetch;
