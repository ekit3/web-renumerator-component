import type {Job} from "../classes/salaryConfig";

export interface IRateManager {
  getRate(jobName: string): Job | undefined;

  getRateList(): Job[];

  getMinExperienceValue(): number;
  getSalary(experience: number,jobName: string): number;
}
