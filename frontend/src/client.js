const BASE_URL = 'http://localhost:8000';

module.exports = {
   
  getItems(success){
    fetch(`${BASE_URL}/items/`)
      .then(response => response.json())
      .then(success)
  },

  createItem(data, success){
    fetch(`${BASE_URL}/items/`, {
      'method': 'POST',
      'body': JSON.stringify(data) 
    })
      .then(response => response.json())
      .then(success)
  },


  deleteItem(id, success){
    fetch(`${BASE_URL}/items/${id}/`, {
      'method': 'DELETE'
    })
      .then(response => response.json())
      .then(success)
  }

}