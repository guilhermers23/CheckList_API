import Teste from "../models/Teste.js";

class TesteRepository {
    async criarTeste(data) {
        const novoTeste = new Teste(data);
        return await novoTeste.save();
    }

    async buscarPorId(id) {
        return await Teste.findById(id)
            .populate("grupo")
            .populate("subGrupo");
    }

    async buscarTodos() {
        return await Teste.find()
            .populate("grupo")
            .populate("subGrupo");
    }

    async atualizarTeste(id, data) {
        return await Teste.findByIdAndUpdate(id, data, { new: true });
    }

    async excluirTeste(id) {
        return await Teste.findByIdAndDelete(id);
    }
}

export default new TesteRepository();
