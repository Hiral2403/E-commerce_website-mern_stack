const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "ASBNT7niqaQYGoeCce3lJOBZG_FmXXAQ_I2Mtgq6LTsIM3OhlY0yOVDBGZwBv8cTsf7g5Ny0elMm1IeZ",
  client_secret: "EHdR5zByE-XfEENANwyPsSRuIAtacvIi9LRoW8F3TD15h_OlMkrLcbiR_miGU4V9mDZ_LPcMz60cCzRS",
});

module.exports = paypal;