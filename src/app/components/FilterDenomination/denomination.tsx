export default function Denomination() {
  return (
            <div>
                <label htmlFor="typeSelect" className="form-label">Tipo de Igreja</label>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Todas</option>
                    <option value="1">Assembléia de Deus</option>
                    <option value="2">Batista</option>
                    <option value="3">Presbiteriana</option>
                    <option value="4">Metodista</option>
                    <option value="5">Adventista</option>
                    <option value="6">Metodista</option>
                    <option value="7">Católica</option>
                    <option value="8">Salão do Reino</option>
                    <option value="9">Outra</option>
                </select>
            </div>
  );
}