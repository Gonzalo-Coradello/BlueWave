import axios from 'axios'

const baseUrl = 'http://localhost:8080'

export const sendEmail = async data => {
  const response = await axios.post(`${baseUrl}/emailContact`, data)
  return response.data
}
