import { RateManager } from "../rateManager";

const EKITE_RATES = {
  "Développeur Front E": 400,
  "Développeur Back E": 500,
};

export class Ekite extends RateManager {
  readonly MIN_EXPERIENCE_VALUE = 3;
  readonly MIN_TJM_VALUE = 450;

  constructor() {
    super();
    this.initializeWithRates(EKITE_RATES);
  }
}
