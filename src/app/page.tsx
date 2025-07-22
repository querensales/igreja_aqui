import Navbar from "./components/Navigation/Navbar";
import FilterChurch from "./components/FilterChurch/Filter";
import FilterDenomination from "./components/FilterDenomination/denomination";

export default function Home() {
  return (
    <section>
      <Navbar />
      <h1>Encontre uma igreja próxima a você</h1>
      <FilterChurch />
      <FilterDenomination />
    </section>
  );
}
