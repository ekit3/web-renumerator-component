export interface SalaryConfig {
	avantages_link: string
	join_link: string
	fixed_salary: number
	min_experience: number
	min_salary: number
	group_days: number
	tjm_base: number
	jobs: Job[]
}

export interface Job {
	name: string
	tjmGrid: TjmGrid[]
}

export interface TjmGrid {
	xp: number
	tjm: number
}
