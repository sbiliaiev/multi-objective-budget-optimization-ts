// Utils
import { round } from 'lodash'

// Types
import { Data, IAlternative, IStrategy } from '../types'

// Calculate one criteria efficiency
const calculateEfficiency = (value: number, worst: number, best: number) => {
  return round((value - worst) / (best - worst), 4)
}

// Create collection with correct efficiencies
const createNormilizedMatrix = (data: Data | null, strategy: IStrategy) => {
  if (data) {
    // identify the worst and the best criterias
    let worstEconomic = data[0].economic
    let worstEcologic = data[0].ecologic
    let worstSocial = data[0].social

    let bestEconomic = data[0].economic
    let bestEcologic = data[0].ecologic
    let bestSocial = data[0].social

    data.forEach((alternative: IAlternative) => {
      if (alternative.economic < worstEconomic) {
        worstEconomic = alternative.economic
      }
      if (alternative.economic > bestEconomic) {
        bestEconomic = alternative.economic
      }

      if (alternative.ecologic < worstEcologic) {
        worstEcologic = alternative.ecologic
      }
      if (alternative.ecologic > bestEcologic) {
        bestEcologic = alternative.ecologic
      }

      if (alternative.social < worstSocial) {
        worstSocial = alternative.social
      }
      if (alternative.social > bestSocial) {
        bestSocial = alternative.social
      }
    })

    console.log(`worstEconomic: ${worstEconomic}\nworstEcologic: ${worstEcologic}\nworstSocial: ${worstSocial}`)
    console.log(`bestEconomic: ${bestEconomic}\nbestEcologic: ${bestEcologic}\nbestSocial: ${bestSocial}`)

    return data.map((alternative: IAlternative, index: number) => {
      const ecologic = calculateEfficiency(alternative.ecologic, worstEcologic, bestEcologic) * strategy.ecologic
      const economic = calculateEfficiency(alternative.economic, worstEconomic, bestEconomic) * strategy.economic
      const social = calculateEfficiency(alternative.social, worstSocial, bestSocial) * strategy.social

      return {
        cost: alternative.cost,
        ecologicEfficiency: ecologic,
        economicEfficiency: economic,
        number: alternative.number,
        socialEfficiency: social,
        summaryEfficiency: round(ecologic + economic + social, 4),
      }
    })
  }

  return []
}

export default createNormilizedMatrix
