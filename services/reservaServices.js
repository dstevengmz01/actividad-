const { Reserva } = require("../models");

class ReservaService {
  async getAllReservas() {
    return await Reserva.findAll();
  }

  async getReservaById(id) {
    return await Reserva.findByPk(id);
  }

  async createReserva(data) {
    return await Reserva.create(data);
  }

  async deleteReserva(id) {
    return await Reserva.destroy({ where: { id } });
  }
}

module.exports = new ReservaService();
