import http from '../http-common'
class TodoService {
  getAll(){
    return http.get('/todoitems')
  }
   create(data){
    return http.post('/todoitems', data)
   }

   remove(id){
     return http.delete('/todoitems/'+id)
   }
   
   update(id, data){
   return http.put('/todoitems/'+id, data)
   }
}

export default new TodoService();