import { reactive } from 'vue'
// eslint-disable-next-line no-unused-vars
import Apod from './models/Apod'

export const AppState = reactive({
  // /** @type {Movie[]} */
  // results: [],
  /** @type {Apod} */
  apod: null
})
