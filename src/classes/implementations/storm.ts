import { RateManager } from "../rateManager";

const STORM_RATES = {
  "Développeur Front S": 500,
  "Développeur Back S": 600,
};

export class Storm extends RateManager {
  readonly MIN_EXPERIENCE_VALUE = 2;
  readonly MIN_TJM_VALUE = 500;

  constructor() {
    super();
    this.initializeWithRates(STORM_RATES);
  }
}
