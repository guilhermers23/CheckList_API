import Session from "../models/Session.js";

class SessionRepository {
  async createSession(data) {
    return await Session.create(data);
  };

  async findSessionById(sessionId) {
    return await Session.findById(sessionId).populate('tecnicoId');
  };

  async addTestResult(sessionId, test) {
    return await Session.findByIdAndUpdate(sessionId, { $push: { tests: test } }, { new: true });
  };

  async findSessionsByTecnico(tecnicoId) {
    return await Session.find({ tecnicoId });
  };
};

export default new SessionRepository();
