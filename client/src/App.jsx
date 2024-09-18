import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api`);
        if (!response.ok) {
          throw new Error(`Erreur HTTP! statut: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setMessage(data.message);
      } catch (e) {
        console.error("Une erreur s'est produite:", e);
        setError("Impossible de se connecter au serveur");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {message && <p>Message du serveur : {message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}

export default App;
