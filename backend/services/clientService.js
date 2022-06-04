const boom = require('@hapi/boom')

class ClientsService {
  constructor(){
    this.clients = {
      line1: [],
      line2: []
    }
  }

  async create(data){
    const newClient = {
      ...data
    }
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
    return this.clients
  }

  async delete(id){
    const index1 = this.clients.line1.findIndex(client => client.id === id)
    const index2 = this.clients.line2.findIndex(client => client.id === id)
    console.log(index1, index2)

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