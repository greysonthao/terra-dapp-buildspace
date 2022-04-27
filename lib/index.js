module.exports = ({ wallets, refs, config, client }) => ({
  getDateOfBirth: () => client.query("clicker", { get_date_of_birth: {} }),
  getScores: () => client.query("clicker", { get_scores: {} }),

  upsertScore: (score, signer = wallets.validator) =>
    client.execute(signer, "clicker", { upsert_score: { score } }),
});
