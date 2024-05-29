import type {IRateManager} from "../interfaces/IRateManager";
import type {Job, SalaryConfig} from "./salaryConfig";

export abstract class RateManager implements IRateManager {
  private readonly config: SalaryConfig;

  protected constructor(rates: SalaryConfig) {
    this.config = rates;
  }

  public getRate(jobName: string): Job | undefined {
    return this.config.jobs.find((job) => job.name === jobName);
  }

  public getRateList(): Job[] {
    return this.config.jobs.sort((a, b) => (a.name > b.name) ? 1 : ((a.name < b.name) ? -1 : 0));
  }

  public getMinExperienceValue(): number {
    return this.config.min_experience;
  }

  public getMinTJMValue(): number {
    return this.config.tjm_base;
  }

  getSalary(experience: number, jobName: string, selectedTjm: number): number {
    const job = this.getRate(jobName);
    if (job) {
      const realXP = Math.min(job.tjmGrid.length, experience) - this.config.min_experience;
      const jobXp = job.tjmGrid[realXP];
      const tjm = selectedTjm || jobXp.tjm;
      const salary = this.config.fixed_salary * 12 + (tjm - this.config.tjm_base) / 2 * (251 - 35 - this.config.group_days) * (1 + 0.1 / (52 * 5 / 12) * 25);
      return Math.round(salary);
    }
    return this.config.min_salary;
  }

  updateTJM(experience: number, jobName: string): number {
    const job = this.getRate(jobName);
    if (job) {
      const realXP = Math.min(job.tjmGrid.length, experience) - this.config.min_experience;
      const jobXp = job.tjmGrid[realXP];
      return jobXp.tjm;
    }
    return this.config.tjm_base;
  }

  public getJoinUsLink(): string {
   return this.config.join_link;
  }

  public getAvantagesLink(): string{
    return this.config.avantages_link;
  }
}
