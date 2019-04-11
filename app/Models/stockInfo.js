const mongoose = require('mongoose')
const stockSchema = new mongoose.Schema({
  stock: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    min: 0,
    required: [true, 'Informe o valor da ação!']
  },
  quantity: {
    type: Number,
    min: 0,
    required: [true, 'Informe a quantidade!']
  },
  // status: {
  //   type: String,
  //   required: false,
  //   uppercase: true,
  //   enum: ['PAGO', 'PENDENTE', 'AGENDADO']
  // }
})

module.exports = mongoose.model('stockInfo', stockSchema)
