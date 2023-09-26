export interface IRateManager {
  getRate(jobName: string): number | undefined;
  getRateList(): Map<string, number>;
  getMinExperienceValue(): number;
  getMinTjmValue(): number;
}
