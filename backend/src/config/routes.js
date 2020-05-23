const express = require("express");
module.exports = function(server) {
  //definir url base para todas as rotas
  const router = express.Router();
  server.use("/api", router); //base inicio das rotas da api

  //Rotas de Ciclo de Pagamento
  const billingCycle = require("../api/billingCycle/billingCycleService");
  billingCycle.register(router, "/billingCycles");
};
