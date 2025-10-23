import { CandidatoSubtiposRepo } from "../repositories/candidatoSubtipos.repo";
import { CandidatosRepo } from "../repositories/candidatos.repo";

export const CandidatoSubtiposService = {
  async listarPorCandidato(candidatoId: number) {
    return CandidatoSubtiposRepo.findByCandidato(candidatoId);
  },

  async vincular(candidatoId: number, subtipoIds: number[]) {
    const candidato = await CandidatosRepo.findById(candidatoId);
    if (!candidato) throw new Error("Candidato não encontrado");
    if (!subtipoIds.length)
      throw new Error("É necessário informar pelo menos um subtipo");
    await CandidatoSubtiposRepo.create(candidatoId, subtipoIds);
    return { ok: true };
  },
};