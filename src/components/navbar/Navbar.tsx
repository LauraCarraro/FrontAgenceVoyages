import "./navbar.css";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-white bg-white"
      style={{ display: "flex", alignItems: "center" }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          className="navbar-logo"
          src="https://static.vecteezy.com/ti/vecteur-libre/p1/40522098-voyage-sac-vecteur-logo-conception-modele-vectoriel.jpg%20985w"
          style={{ width: "100px", height: "auto", marginRight: "10px" }}
        />
        <p
          style={{
            color: "rgb(246, 45, 179)",
            fontWeight: "bold",
            fontSize: "larger",
            margin: "0",
          }}
        >
          Agence Voyages
        </p>
      </div>
      <div className="ml-auto">
        <a
          className="nav-link"
          href="/"
          style={{ color: "black", marginLeft: "10px" }}
        >
          accueil
        </a>
        <a
          className="nav-link"
          href="/voyages"
          style={{ color: "black", marginLeft: "10px" }}
        >
          voyages
        </a>
        <a
          className="nav-link"
          href="/contact"
          style={{ color: "black", marginLeft: "10px" }}
        >
          contact
        </a>
      </div>
    </nav>
  );
}
