export interface IAlternative {
  number: number
  cost: number
  economic: number
  ecologic: number
  social: number
}

export type Data = IAlternative[]

export interface IStrategy {
  economic: number
  ecologic: number
  social: number
}

export interface INormilizedMatrix {
  summaryEfficiency: number
  ecologicEfficiency: number
  economicEfficiency: number
  number: number
  socialEfficiency: number
  cost: number
}
