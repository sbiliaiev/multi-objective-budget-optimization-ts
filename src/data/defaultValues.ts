const defaultValues = [
  { number: 1, cost: 9.9, social: 0.52, economic: 0.23, ecologic: 0.84 },
  { number: 2, cost: 2.96, social: 0.46, economic: 0.17, ecologic: 0.78 },
  { number: 3, cost: 2.2, social: 0.9, economic: 0.56, ecologic: 0.32 },
  { number: 4, cost: 2000, social: 0.81, economic: 0.05, ecologic: 0.64 },
  { number: 5, cost: 4.5, social: 0.65, economic: 0.96, ecologic: 0.16 },
  { number: 6, cost: 59, social: 0.31, economic: 0.26, ecologic: 0.86 },
  { number: 7, cost: 6000, social: 0.28, economic: 0.07, ecologic: 0.78 },
  { number: 8, cost: 85, social: 0.37, economic: 0.89, ecologic: 0.62 },
  { number: 9, cost: 1.25, social: 0.79, economic: 0.44, ecologic: 0.21 },
  { number: 10, cost: 18, social: 0.63, economic: 0.9, ecologic: 0.16 },
  { number: 11, cost: 1.86, social: 0.77, economic: 0.47, ecologic: 0.45 },
  { number: 12, cost: 1.37, social: 0.45, economic: 0.17, ecologic: 0.38 },
  { number: 13, cost: 1.79, social: 0.81, economic: 0.18, ecologic: 0.42 },
  { number: 14, cost: 1200, social: 0.48, economic: 0.15, ecologic: 0.89 },
  { number: 15, cost: 10, social: 0.87, economic: 0.44, ecologic: 0.74 },
  { number: 16, cost: 1.8, social: 0.82, economic: 0.28, ecologic: 0.55 },
  { number: 17, cost: 35, social: 0.61, economic: 0.26, ecologic: 0.76 },
  { number: 18, cost: 400, social: 0.75, economic: 0.6, ecologic: 0.88 },
  { number: 19, cost: 0.16, social: 0.97, economic: 0.69, ecologic: 0.24 },
  { number: 20, cost: 0.3, social: 0.56, economic: 0.17, ecologic: 0.51 },
  { number: 21, cost: 1.22, social: 0.81, economic: 0.24, ecologic: 0.68 },
  { number: 22, cost: 250, social: 0.74, economic: 0.34, ecologic: 0.82 },
  { number: 23, cost: 0.13, social: 0.32, economic: 0.23, ecologic: 0.77 },
  { number: 24, cost: 2125, social: 0.53, economic: 0.04, ecologic: 0.83 },
  { number: 25, cost: 8045, social: 0.75, economic: 0.25, ecologic: 0.97 },
  { number: 26, cost: 2.9, social: 0.95, economic: 0.43, ecologic: 0.12 },
  { number: 27, cost: 48, social: 0.95, economic: 0.58, ecologic: 0.16 },
  { number: 28, cost: 0.27, social: 0.64, economic: 0.18, ecologic: 0.21 },
  { number: 29, cost: 1.8, social: 0.83, economic: 0.32, ecologic: 0.72 },
  { number: 30, cost: 5.9, social: 0.28, economic: 0.95, ecologic: 0.79 },
]

// const defaultValues = {
//   1: {
//     number: 1,
//     cost: 9.9,
//     social: 0.52,
//     economic: 0.23,
//     ecologic: 0.84
//   },
//   2: {
//     number: 2,
//     cost: 2.96,
//     social: 0.46,
//     economic: 0.17,
//     ecologic: 0.78
//   },
//   3: {
//     number: 3,
//     cost: 2.2,
//     social: 0.9,
//     economic: 0.56,
//     ecologic: 0.32
//   },
//   4: {
//     number: 4,
//     cost: 2000,
//     social: 0.81,
//     economic: 0.05,
//     ecologic: 0.64
//   },
//   5: {
//     number: 5,
//     cost: 4.5,
//     social: 0.65,
//     economic: 0.96,
//     ecologic: 0.16
//   },
//   6: {
//     number: 6,
//     cost: 59,
//     social: 0.31,
//     economic: 0.26,
//     ecologic: 0.86
//   },
//   7: {
//     number: 7,
//     cost: 6000,
//     social: 0.28,
//     economic: 0.07,
//     ecologic: 0.78
//   },
//   8: {
//     number: 8,
//     cost: 85,
//     social: 0.37,
//     economic: 0.89,
//     ecologic: 0.62
//   },
//   9: {
//     number: 9,
//     cost: 1.25,
//     social: 0.79,
//     economic: 0.44,
//     ecologic: 0.21
//   },
//   10: {
//     number: 10,
//     cost: 18,
//     social: 0.63,
//     economic: 0.9,
//     ecologic: 0.16
//   },
//   11: {
//     number: 11,
//     cost: 1.86,
//     social: 0.77,
//     economic: 0.47,
//     ecologic: 0.45
//   },
//   12: {
//     number: 12,
//     cost: 1.37,
//     social: 0.45,
//     economic: 0.17,
//     ecologic: 0.38
//   },
//   13: {
//     number: 13,
//     cost: 1.79,
//     social: 0.81,
//     economic: 0.18,
//     ecologic: 0.42
//   },
//   14: {
//     number: 14,
//     cost: 1200,
//     social: 0.48,
//     economic: 0.15,
//     ecologic: 0.89
//   },
//   15: {
//     number: 15,
//     cost: 10,
//     social: 0.87,
//     economic: 0.44,
//     ecologic: 0.74
//   },
//   16: {
//     number: 16,
//     cost: 1.8,
//     social: 0.82,
//     economic: 0.28,
//     ecologic: 0.55
//   },
//   17: {
//     number: 17,
//     cost: 35,
//     social: 0.61,
//     economic: 0.26,
//     ecologic: 0.76
//   },
//   18: {
//     number: 18,
//     cost: 400,
//     social: 0.75,
//     economic: 0.6,
//     ecologic: 0.88
//   },
//   19: {
//     number: 19,
//     cost: 0.16,
//     social: 0.97,
//     economic: 0.69,
//     ecologic: 0.24
//   },
//   20: {
//     number: 20,
//     cost: 0.3,
//     social: 0.56,
//     economic: 0.17,
//     ecologic: 0.51
//   },
//   21: {
//     number: 21,
//     cost: 1.22,
//     social: 0.81,
//     economic: 0.24,
//     ecologic: 0.68
//   },
//   22: {
//     number: 22,
//     cost: 250,
//     social: 0.74,
//     economic: 0.34,
//     ecologic: 0.82
//   },
//   23: {
//     number: 23,
//     cost: 0.13,
//     social: 0.32,
//     economic: 0.23,
//     ecologic: 0.77
//   },
//   24: {
//     number: 24,
//     cost: 2125,
//     social: 0.53,
//     economic: 0.04,
//     ecologic: 0.83
//   },
//   25: {
//     number: 25,
//     cost: 8045,
//     social: 0.75,
//     economic: 0.25,
//     ecologic: 0.97
//   },
//   26: {
//     number: 26,
//     cost: 2.9,
//     social: 0.95,
//     economic: 0.43,
//     ecologic: 0.12
//   },
//   27: {
//     number: 27,
//     cost: 48,
//     social: 0.95,
//     economic: 0.58,
//     ecologic: 0.16
//   },
//   28: {
//     number: 28,
//     cost: 0.27,
//     social: 0.64,
//     economic: 0.18,
//     ecologic: 0.21
//   },
//   29: {
//     number: 29,
//     cost: 1.8,
//     social: 0.83,
//     economic: 0.32,
//     ecologic: 0.72
//   },
//   30: {
//     number: 30,
//     cost: 5.9,
//     social: 0.28,
//     economic: 0.95,
//     ecologic: 0.79
//   }
// }

export default defaultValues
