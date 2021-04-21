import axios from 'axios'

export const apodApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=MWx9H3D9fnzCNJE2hgBQ2Z6W6bpAMerIEk67Fmve',
  timeout: 3000
})
