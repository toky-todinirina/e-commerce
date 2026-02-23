import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Exemple de requête vers ton API Express
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        // Sauvegarder le token ou les infos utilisateur
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/"); // rediriger vers la page d'accueil
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Erreur serveur. Veuillez réessayer.");
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Connexion</h2>
        {error && <p className="error">{error}</p>}

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Mot de passe</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}