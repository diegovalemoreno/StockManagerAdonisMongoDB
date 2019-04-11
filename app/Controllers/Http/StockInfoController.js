 'use strict'
 const stockSchema = use('App/Models/stockInfo')


 /** @typedef {import('@adonisjs/framework/src/Request')} Request */
 /** @typedef {import('@adonisjs/framework/src/Response')} Response */
 /** @typedef {import('@adonisjs/framework/src/View')} View */

 /**
  * Resourceful controller for interacting with stockinfos
  */
 class StockInfoController {
   /**
    * Show a list of all stockinfos.
    * GET stockinfos
    *
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    * @param {View} ctx.view
    */
   async index({
     request,
     response,
     view
   }) {}

   /**
    * Create/save a new stockinfo.
    * POST stockinfos
    *
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    */
   async store({
     request,
     response
   }) {


     const data = request.only(['stock', 'price', 'quantity'])

     const stock = await stockSchema.create(data)
     console.log(stock)
     return stock;
   }

   /**
    * Display a single stockinfo.
    * GET stockinfos/:id
    *
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    * @param {View} ctx.view
    */
   async show({
     params,
     request,
     response,
     view
   }) {}

   /**
    * Render a form to update an existing stockinfo.
    * GET stockinfos/:id/edit
    *
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    * @param {View} ctx.view
    */
   async edit({
     params,
     request,
     response,
     view
   }) {}

   /**
    * Update stockinfo details.
    * PUT or PATCH stockinfos/:id
    *
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    */
   async update({
     params,
     request,
     response
   }) {}

   /**
    * Delete a stockinfo with id.
    * DELETE stockinfos/:id
    *
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    */
   async destroy({
     params,
     request,
     response
   }) {

     const stock = await stockSchema.findById(params.id)
     stock.delete()

   }
 }

 module.exports = StockInfoController
