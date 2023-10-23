import {RateManager} from "../rateManager";

import CONFIG from '../../lib/resources/grid_storm.json';

export class Storm extends RateManager {

  constructor() {
    super(CONFIG);
  }

}
