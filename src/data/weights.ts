const generateStrategy = (social: number, economic: number, ecologic: number) => ({ social, economic, ecologic })

const socialStrategy = generateStrategy(0.5, 0.25, 0.25)
const economicStrategy = generateStrategy(0.25, 0.5, 0.25)
const ecologicStrategy = generateStrategy(0.25, 0.25, 0.5)

export { socialStrategy }
export { economicStrategy }
export { ecologicStrategy }

export default {
  ecologicStrategy,
  economicStrategy,
  socialStrategy,
}
