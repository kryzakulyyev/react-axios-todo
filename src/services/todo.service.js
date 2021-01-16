import http from '../http-common'
class TodoService {
  getAll(){
    return http.get('/todoitems')
  }
   create(data){
    return http.post('/todoitems', data)
   }

   remove(data){
     return http.delete('/todoitems', data)
   }
  
}

export default new TodoService();