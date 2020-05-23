const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
module.exports = mongoose.connect("mongodb://localhost/mymoney");

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório.";
mongoose.Error.messages.Number.min = "Numero menor que o limite '{MIN}'";
mongoose.Error.messages.Number.max = "Numero maior que o limite'{MAX}'";
mongoose.Error.messages.String.enum =
  "'{VALUE}' não é válido para o atributo '{PATH}'";
