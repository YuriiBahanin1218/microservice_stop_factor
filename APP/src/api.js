import axios from 'axios'

export function saveSource (data) {
  return axios.post('http://localhost:8000/api/v1/admin/source', data)
}
