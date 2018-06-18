// Utils
import { reverse, sortBy } from 'lodash'

// Types
import { INormilizedMatrix } from '../types'

const sortNormilizedMatrix = (data: INormilizedMatrix[]) => {
  return reverse(sortBy(data, 'summaryEfficiency'))
}

export default sortNormilizedMatrix
