const TurnoModel = require('./TurnoModel');

const turnoController = {
  async create(req, res) {
    try {
      const { responsavel } = req.body;
      const turno = await TurnoModel.abrirTurno(responsavel);
      res.json({ success: true, data: turno });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }
};

module.exports = turnoController;