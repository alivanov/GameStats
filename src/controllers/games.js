import Game from '../models/game';
import updateGameData from '../jobs/job';

const isCacheTimeExpired = lastUpdatedAt => {
  const MAX_AGE_MS = 15 * 1000;

  const nowMs = new Date().getTime();
  const lastUpdatedAtMs = new Date(lastUpdatedAt).getTime();
  return nowMs - lastUpdatedAtMs > MAX_AGE_MS;
};

const getGameData = async (req, res) => {
  try {
    let data = await Game.findOne({ 'data.league': req.query.league }).exec();

    if (!data || isCacheTimeExpired(data.updatedAt)) {
      data = await updateGameData(req.query.league);
    }

    res.json({ data });
  } catch (e) {
    res.json({ data: null, error: 'getGameData error' });
  }
};

export default {
  getGameData,
};
