import axios from 'axios'

const apiCliente = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 1000,
})

export default {
  getEvents(pePage, page) {
    return apiCliente.get('/events?_limit=' + pePage + '&_page=' + page)
  },

  getEvento(id) {
    return apiCliente.get('/events/' + id)
  },

  postEvento(evento) {
    return apiCliente.post('/events', evento)
  },
}
