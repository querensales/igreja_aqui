import Navbar from "./components/Navigation/Navbar";
import FilterChurch from "./components/Navigation/FilterChurch/Filter";


export default function Home() {
  return (
    <section>
      <Navbar />
      <h1>Encontre uma igreja próxima a você</h1>
      <FilterChurch />
    </section>
  );
}
