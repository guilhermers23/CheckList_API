import TesteService from "../services/teste.service.js";

const criarTeste = async (req, res) => {
  try {
    const { grupoNome, subGrupoNome, description, resultado, completed, observacao } = req.body;
    const tecnico = req.userId;

    // Criar novo teste com grupo e subgrupo
    const teste = await TesteService.criarTeste({
      grupoNome,
      subGrupoNome,
      description,
      resultado,
      completed,
      observacao
    }, tecnico);

    return res.status(201).json(teste);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const buscarPorId = async (req, res) => {
  try{
    const teste = await TesteService.buscarPorId(req.params.id);
    return res.status(200).json(teste);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const atualizarTeste = async (req, res) => {
  try {
    const teste = await TesteService.atualizarTeste(req.params.id, req.body);
    return res.status(200).json(teste);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const excluirTeste = async (req, res) => {
  try {
    const { id } = req.params;
    const tecnico = req.userId;

    await TesteService.excluirTeste(id, tecnico);
    return res.status(204).json({ message: "Teste Excluido com sucesso!" });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const findTestesByUserIdController = async (req, res) => {
  const id = req.userId;

  try {
    const testes = await TesteService.findTestesByUserIdService(id);
    return res.send(testes);
  } catch (e) {
    console.error("Error:", e)
    return res.status(500).send(e.message);
  }
};

const listarTestesPorFiltro = async (req, res) => {
  try {
    const { grupoId, subGrupoId } = req.query;
    const testes = await TesteService.buscarTestesPorFiltro(grupoId, subGrupoId);
    if (testes.length === 0) {
      res.json({ message: "Nenhum teste encontrado!" })
    }
    return res.status(200).json(testes);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default {
  criarTeste,
  buscarPorId,
  atualizarTeste,
  excluirTeste,
  listarTestesPorFiltro,
  findTestesByUserIdController
}
