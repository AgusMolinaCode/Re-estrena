import { Schema, model, models, Document } from 'mongoose'

export interface IMercadoPagoOrder extends Document {
  createdAt: Date
  mercadoPagoId: string
  totalAmount: string
  event: {
    _id: string
    title: string
  }
  buyer: {
    _id: string
    firstName: string
    lastName: string
  }
}

export type IMercadoPagoOrderItem = {
  _id: string
  totalAmount: string
  createdAt: Date
  eventTitle: string
  eventId: string
  buyer: string
}

const MercadoPagoOrderSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  mercadoPagoId: {
    type: String,
    required: true,
    unique: true,
  },
  totalAmount: {
    type: String,
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
})

const MercadoPagoOrder = models.MercadoPagoOrder || model('MercadoPagoOrder', MercadoPagoOrderSchema)

export default MercadoPagoOrder