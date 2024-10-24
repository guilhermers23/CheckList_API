import TesteService from "../services/Teste.Service.js";

class TesteController {
  async criarTeste(req, res) {
    try {
      const { tecnico, grupoNome, subGrupoNome, description, resultado, completed, observacao } = req.body;

      // Criar novo teste com grupo e subgrupo
      const teste = await TesteService.criarTeste({
        tecnico,
        grupoNome,
        subGrupoNome,
        description,
        resultado,
        completed,
        observacao
      });

      return res.status(201).json(teste);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };

  async buscarPorId(req, res) {
    try {
      const teste = await TesteService.buscarPorId(req.params.id);
      return res.status(200).json(teste);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  };

  async atualizarTeste(req, res) {
    try {
      const teste = await TesteService.atualizarTeste(req.params.id, req.body);
      return res.status(200).json(teste);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };

  async excluirTeste(req, res) {
    try {
      await TesteService.excluirTeste(req.params.id);
      return res.status(204).send();
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  };

  async listarTestesPorFiltro(req, res) {
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
}

export default new TesteController();
