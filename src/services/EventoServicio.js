import axios from 'axios'

const apiCliente = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents() {
    return apiCliente.get('/events')
  },

  getEvento(id) {
    return apiCliente.get('/events/' + id)
  },
}
