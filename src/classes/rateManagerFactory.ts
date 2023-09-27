import { Ekite } from "./implementations/ekite";
import { Storm } from "./implementations/storm";
import type { RateManager } from "./rateManager";
import { Company } from "../enums/company";

export class RateManagerFactory {
  static create(type: Company): RateManager {
    switch (type) {
      case Company.EKITE:
        return new Ekite();
      case Company.STORM:
        return new Storm();
      default:
        console.warn(
          "No company props props defined in component initialisation : default EKITE"
        );
        return new Ekite();
    }
  }
}
