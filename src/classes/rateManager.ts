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
    return this.config.jobs;
  }

  public getMinExperienceValue(): number {
    return this.config.min_experience;
  }

  getSalary(experience: number, jobName: string): number  {
    let job = this.getRate(jobName);
    if (job) {
      let realXP = Math.min(job.tjmGrid.length, experience) - this.config.min_experience;
      let jobXp = job.tjmGrid[realXP];
      let tjm = jobXp.tjm;
      console.log(tjm);
      let salary = this.config.min_salary * 12 + (tjm - this.config.tjm_base) / 2 * (251 - 35 - this.config.group_days) * (1 + 0.1 / (52 * 5 / 12) * 25);
      return Math.round(salary);
    }
    return this.config.min_salary;
  }
}
