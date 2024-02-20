import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h3>Home page</h3>
      <Link to="/about">About</Link>
    </div>
  );
}
