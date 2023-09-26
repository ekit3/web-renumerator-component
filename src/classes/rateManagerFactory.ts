import { Ekite } from "./implementations/ekite";
import { Storm } from "./implementations/storm";
import type { RateManager } from "./rateManager";

export enum Company {
  EKITE,
  STORM,
}

export class RateManagerFactory {
  static create(type: Company): RateManager {
    switch (type) {
      case Company.EKITE:
        return new Ekite();
      case Company.STORM:
        return new Storm();
      default:
        return new Ekite();
    }
  }
}
