import axios from 'axios';
import { FeedsURLs } from '../config';
import Game from '../models/game';

const updateGameData = async league => {
  try {
    if (FeedsURLs[league]) {
      const res = await axios.get(FeedsURLs[league]);
      const doc = await Game.findOneAndUpdate(
        {
          'data.league': league,
        },
        {
          $set: { data: res.data },
        },
        {
          upsert: true,
          new: true,
        },
      ).exec();

      return doc;
    }
  } catch (e) {
    console.log('updateGameData fails', e);
    return null;
  }

  return null;
};

export default updateGameData;
