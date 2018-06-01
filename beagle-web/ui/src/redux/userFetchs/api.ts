import axios from 'axios'

export const fetchData = (personKey: string) => {
  return axios.post('/fetch/get', {
    clientName: 'beagleWeb',
    personKey,
    personInfo: null,
  })
}

export const createFetchExplore = (fetchUrl: string, personKey: string) => {
  return axios.post('/fetch/explore', {
    person: {
      clientName: 'beagleWeb',
      personKey,
      personInfo: null,
    },
    fetchUrl,
  })
}

export const createFetch = (fetchUrl: string, sampleUrl: string, personKey: string) => {
  return axios.post('/fetch', {
    person: {
      clientName: 'beagleWeb',
      personKey,
      personInfo: null,
    },
    fetchUrl,
    sampleUrl,
  })
}

export const removeFetch = (fetchUrl: string, personKey: string) => {
  return axios.post('/fetch/delete', {
    person: {
      clientName: 'beagleWeb',
      personKey,
      personInfo: null,
    },
    fetchUrl,
    meta: null,
  })
}