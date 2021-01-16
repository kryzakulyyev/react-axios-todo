import http from '../http-common'
class TodoService {
  getAll(){
    return http.get('/todoitems')
  }

  
}

export default new TodoService();