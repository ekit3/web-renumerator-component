import { JobType } from "./jobType";
import type { IRateManager } from "../interfaces/IRateManager";

export abstract class RateManager implements IRateManager {
  private rates: Map<string, number> = new Map();

  protected abstract readonly MIN_EXPERIENCE_VALUE: number;
  protected abstract readonly MIN_TJM_VALUE: number;

  protected initializeWithRates(rates: Record<string, number>): void {
    for (const [name, value] of Object.entries(rates)) {
      this.setRate(new JobType(name, value));
    }
  }
  protected setRate(jobType: JobType): void {
    this.rates.set(jobType.name, jobType.value);
  }

  public getRate(jobName: string): number | undefined {
    return this.rates.get(jobName);
  }

  public getRateList(): Map<string, number> {
    return this.rates;
  }

  public getMinExperienceValue(): number {
    return this.MIN_EXPERIENCE_VALUE;
  }

  public getMinTjmValue(): number {
    return this.MIN_TJM_VALUE;
  }
}
