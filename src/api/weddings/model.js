import mongoose, { Schema } from 'mongoose'

const weddingsSchema = new Schema({
  Name: {
    type: String
  },
  Place: {
    type: String
  },
  Email: {
    type: String
  },
  Mobile: {
    type: String
  },
  Date: {
    type: Date
  },
  RemainingDays: {
    type: String
  },
  SentDossierDate: {
    type: Date
  },
  Confirm: {
    type: Boolean
  },
  Deposit: {
    type: String
  },
  Total: {
    type: String
  },
  Active: {
    type: String
  },
  BrideHomeFilm: {
    type: Boolean
  },
  GroomHomeFilm: {
    type: Boolean
  },
  BrideDressedUpTime: {
    type: Date
  },
  BrideName: {
    type: String
  },
  BrideId: {
    type: String
  },
  BrideMobile: {
    type: String
  },
  BrideDressedUpPlace: {
    type: String
  },
  BrideDressedUpNotes: {
    type: String
  },
  GroomDressedUpTime: {
    type: Date
  },
  GroomName: {
    type: String
  },
  GroomId: {
    type: String
  },
  GroomMobile: {
    type: String
  },
  GroomDressedUpPlace: {
    type: String
  },
  GroomDressedUpNotes: {
    type: String
  },
  CeremonyTime: {
    type: Date
  },
  CeremonyPlace: {
    type: String
  },
  CeremonyNotes: {
    type: String
  },
  CelebrationTime: {
    type: Date
  },
  CelebrationPlace: {
    type: String
  },
  CelebrationNotes: {
    type: String
  },
  AdditionalInfo: {
    type: String
  }
}, {
  timestamps: true
})

weddingsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this._id,
      name: this.Name,
      place: this.Place,
      email: this.Email,
      mobile: this.Mobile,
      date: this.Date,
      remainingDays: this.RemainingDays,
      sentDossierDate: this.SentDossierDate,
      confirm: this.Confirm,
      deposit: this.Deposit,
      total: this.Total,
      active: this.Active,
      brideHomeFilm: this.BrideHomeFilm,
      groomHomeFilm: this.GroomHomeFilm,
      brideDressedUpTime: this.BrideDressedUpTime,
      brideName: this.BrideName,
      brideId: this.BrideId,
      brideMobile: this.BrideMobile,
      brideDressedUpPlace: this.BrideDressedUpPlace,
      brideDressedUpNotes: this.BrideDressedUpNotes,
      groomDressedUpTime: this.GroomDressedUpTime,
      groomName: this.GroomName,
      groomId: this.GroomId,
      groomMobile: this.GroomMobile,
      groomDressedUpPlace: this.GroomDressedUpPlace,
      groomDressedUpNotes: this.GroomDressedUpNotes,
      ceremonyTime: this.CeremonyTime,
      ceremonyPlace: this.CeremonyPlace,
      ceremonyNotes: this.CeremonyNotes,
      celebrationTime: this.CelebrationTime,
      celebrationPlace: this.CelebrationPlace,
      celebrationNotes: this.CelebrationNotes,
      additionalInfo: this.AdditionalInfo,
      createdAt: this.CreatedAt,
      updatedAt: this.UpdatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Weddings', weddingsSchema)

export const schema = model.schema
export default model
