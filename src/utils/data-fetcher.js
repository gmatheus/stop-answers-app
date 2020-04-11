import axios from 'axios'

// `stopots.com.br` answers API 
//  Credits: https://github.com/nosliper/StopAnswersAPI
const URL = 'https://stopanswersapi.firebaseapp.com/api/answers'

export const fetchAnswers = (letter) => {
  if (!letter) return Promise.resolve([])

  return axios.get(`${URL}/${letter}`)
    .then(({ data }) => data)
}