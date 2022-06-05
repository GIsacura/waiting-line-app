const boom = require('@hapi/boom')

class ClientsService {
  constructor(){
    this.clients = {
      line1: [],
      line2: []
    }
  }

  async create(data){
    //Recieving data from client
    const newClient = {
      ...data
    }
    // Choosing the line for the shortest waiting time
    if(this.clients.line1.length === 0){
      this.clients.line1.push(newClient)
    }else if(this.clients.line1.length * 2 <= this.clients.line2.length * 3){
      this.clients.line1.push(newClient)
    }else{
      this.clients.line2.push(newClient)
    }
    return newClient
  }

  async find(){
    // Returning the list of clients
    return this.clients
  }

  async delete(id){
     // Searching in both lists to find the client of the recieved id
    const index1 = this.clients.line1.findIndex(client => client.id === id)
    const index2 = this.clients.line2.findIndex(client => client.id === id)

    // Deleting the client from the list where it was found
    if(index1 === -1 && index2 === -1){
      throw boom.notFound('Client not found')
    }

    if(index1 !== -1){
      this.clients.line1 = this.clients.line1.filter(client => client.id !== id)
    }

    if(index2 !== -1){
      this.clients.line2 = this.clients.line2.filter(client => client.id !== id)
    }
    return id
  }
}

module.exports = ClientsService