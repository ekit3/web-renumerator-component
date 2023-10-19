import {RateManager} from "../rateManager";
import CONFIG from "../../lib/resources/grid_ekite.json";

export class Ekite extends RateManager {

  constructor() {
    super(CONFIG);
  }
}
