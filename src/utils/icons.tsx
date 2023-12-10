import { getRandomInt } from './helpers';

import BrownDonut from '../assets/icons/donuts/brown_sprinkles_donut.png';
import RedDonut from '../assets/icons/donuts/red_yellow_donut.png';
import PalidDonut from '../assets/icons/donuts/red_white_donut.png';

const IconList: string[] = [BrownDonut, RedDonut, PalidDonut];

export const getDonutIcon: () => string = () => {
  const rndIcon = getRandomInt(IconList.length);

  return IconList[rndIcon];
};
