import type {Job} from "../classes/salaryConfig";

export interface IRateManager {
  getRate(jobName: string): Job | undefined;

  getRateList(): Job[];

  getMinExperienceValue(): number;
  getMinTJMValue(): number;
  getSalary(experience: number,jobName: string, selectedTjm: number): number;

  updateTJM(experience: number,jobName: string): number;

  getJoinUsLink(): string
}
