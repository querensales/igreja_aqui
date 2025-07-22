export default function Filter() {
    return (
        <div>
            <h2>Filtrar Igrejas</h2>
            <div className="mb-3">
                <label htmlFor="labelInput" className="form-label">Pesquisar por nome/endereço</label>
                <input type="text" className="form-control" id="labelInput" placeholder="Digite o nome ou endereço da igreja" />
            </div>
        </div>
    )
}