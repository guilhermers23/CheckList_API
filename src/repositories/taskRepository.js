import Teste from "../models/Teste.js";

class TaskRepository {
    criarTeste = async (data) => {
        const novoTeste = new Teste(data);
        return await novoTeste.save();
    };

    buscarPorId = async (id) => {
        return await Teste.findById(id)
            .populate("grupo")
            .populate("subGrupo")
            .populate({
                path: "tecnico",
                select: "-email -password"
            });
    };

    findTestesByUserIdRepository = (id) => {
        return Teste.find({
            tecnico: id,
        })
            .populate("grupo")
            .populate("subGrupo")
            .populate({
                path: "tecnico",
                select: "-email -password"
            });
    };

    buscarPorFiltro = async (filtro) => {
        return await Teste.find(filtro)
            .populate('grupo')
            .populate('subGrupo')
            .populate({
                path: "tecnico",
                select: "-email -password"
            });
    };

    atualizarTeste = async (id, data) => {
        return await Teste.findByIdAndUpdate(id, data, { new: true });
    };

    excluirTeste = async (id) => {
        return await Teste.findByIdAndDelete(id);
    };

}

export default new TaskRepository();
