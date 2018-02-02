import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Weddings, { schema } from './model'

const router = new Router()
const { name, place, email, mobile, date, remainingDays, sentDossierDate, confirm, deposit, total, active, brideHomeFilm, groomHomeFilm, brideDressedUpTime, brideName, brideId, brideMobile, brideDressedUpPlace, brideDressedUpNotes, groomDressedUpTime, groomName, groomId, groomMobile, groomDressedUpPlace, groomDressedUpNotes, ceremonyTime, ceremonyPlace, ceremonyNotes, celebrationTime, celebrationPlace, celebrationNotes, additionalInfo } = schema.tree

/**
 * @api {post} /weddings Create weddings
 * @apiName CreateWeddings
 * @apiGroup Weddings
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam name Weddings's name.
 * @apiParam place Weddings's place.
 * @apiParam email Weddings's email.
 * @apiParam mobile Weddings's mobile.
 * @apiParam date Weddings's date.
 * @apiParam remainingDays Weddings's remainingDays.
 * @apiParam sentDossierDate Weddings's sentDossierDate.
 * @apiParam confirm Weddings's confirm.
 * @apiParam deposit Weddings's deposit.
 * @apiParam total Weddings's total.
 * @apiParam active Weddings's active.
 * @apiParam brideHomeFilm Weddings's brideHomeFilm.
 * @apiParam groomHomeFilm Weddings's groomHomeFilm.
 * @apiParam brideDressedUpTime Weddings's brideDressedUpTime.
 * @apiParam brideName Weddings's brideName.
 * @apiParam brideId Weddings's brideId.
 * @apiParam brideMobile Weddings's brideMobile.
 * @apiParam brideDressedUpPlace Weddings's brideDressedUpPlace.
 * @apiParam brideDressedUpNotes Weddings's brideDressedUpNotes.
 * @apiParam groomDressedUpTime Weddings's groomDressedUpTime.
 * @apiParam groomName Weddings's groomName.
 * @apiParam groomId Weddings's groomId.
 * @apiParam groomMobile Weddings's groomMobile.
 * @apiParam groomDressedUpPlace Weddings's groomDressedUpPlace.
 * @apiParam groomDressedUpNotes Weddings's groomDressedUpNotes.
 * @apiParam ceremonyTime Weddings's ceremonyTime.
 * @apiParam ceremonyPlace Weddings's ceremonyPlace.
 * @apiParam ceremonyNotes Weddings's ceremonyNotes.
 * @apiParam celebrationTime Weddings's celebrationTime.
 * @apiParam celebrationPlace Weddings's celebrationPlace.
 * @apiParam celebrationNotes Weddings's celebrationNotes.
 * @apiParam additionalInfo Weddings's additionalInfo.
 * @apiSuccess {Object} weddings Weddings's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Weddings not found.
 * @apiError 401 user access only.
 */
router.post('/',
  token({ required: true }),
  body({ name, place, email, mobile, date, remainingDays, sentDossierDate, confirm, deposit, total, active, brideHomeFilm, groomHomeFilm, brideDressedUpTime, brideName, brideId, brideMobile, brideDressedUpPlace, brideDressedUpNotes, groomDressedUpTime, groomName, groomId, groomMobile, groomDressedUpPlace, groomDressedUpNotes, ceremonyTime, ceremonyPlace, ceremonyNotes, celebrationTime, celebrationPlace, celebrationNotes, additionalInfo }),
  create)

/**
 * @api {get} /weddings Retrieve weddings
 * @apiName RetrieveWeddings
 * @apiGroup Weddings
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiUse listParams
 * @apiSuccess {Object[]} weddings List of weddings.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 user access only.
 */
router.get('/',
  token({ required: true }),
  query({
    ini: {
      type: Date,
      paths: ['Date'],
      operator: '$gte'
    },
    end: {
      type: Date,
      paths: ['Date'],
      operator: '$lt'
    }
  }),
  index)

/**
 * @api {get} /weddings/:id Retrieve weddings
 * @apiName RetrieveWeddings
 * @apiGroup Weddings
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess {Object} weddings Weddings's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Weddings not found.
 * @apiError 401 user access only.
 */
router.get('/:id',
  token({ required: true }),
  show)

/**
 * @api {put} /weddings/:id Update weddings
 * @apiName UpdateWeddings
 * @apiGroup Weddings
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam name Weddings's name.
 * @apiParam place Weddings's place.
 * @apiParam email Weddings's email.
 * @apiParam mobile Weddings's mobile.
 * @apiParam date Weddings's date.
 * @apiParam remainingDays Weddings's remainingDays.
 * @apiParam sentDossierDate Weddings's sentDossierDate.
 * @apiParam confirm Weddings's confirm.
 * @apiParam deposit Weddings's deposit.
 * @apiParam total Weddings's total.
 * @apiParam active Weddings's active.
 * @apiParam brideHomeFilm Weddings's brideHomeFilm.
 * @apiParam groomHomeFilm Weddings's groomHomeFilm.
 * @apiParam brideDressedUpTime Weddings's brideDressedUpTime.
 * @apiParam brideName Weddings's brideName.
 * @apiParam brideId Weddings's brideId.
 * @apiParam brideMobile Weddings's brideMobile.
 * @apiParam brideDressedUpPlace Weddings's brideDressedUpPlace.
 * @apiParam brideDressedUpNotes Weddings's brideDressedUpNotes.
 * @apiParam groomDressedUpTime Weddings's groomDressedUpTime.
 * @apiParam groomName Weddings's groomName.
 * @apiParam groomId Weddings's groomId.
 * @apiParam groomMobile Weddings's groomMobile.
 * @apiParam groomDressedUpPlace Weddings's groomDressedUpPlace.
 * @apiParam groomDressedUpNotes Weddings's groomDressedUpNotes.
 * @apiParam ceremonyTime Weddings's ceremonyTime.
 * @apiParam ceremonyPlace Weddings's ceremonyPlace.
 * @apiParam ceremonyNotes Weddings's ceremonyNotes.
 * @apiParam celebrationTime Weddings's celebrationTime.
 * @apiParam celebrationPlace Weddings's celebrationPlace.
 * @apiParam celebrationNotes Weddings's celebrationNotes.
 * @apiParam additionalInfo Weddings's additionalInfo.
 * @apiSuccess {Object} weddings Weddings's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Weddings not found.
 * @apiError 401 user access only.
 */
router.put('/:id',
  token({ required: true }),
  body({ name, place, email, mobile, date, remainingDays, sentDossierDate, confirm, deposit, total, active, brideHomeFilm, groomHomeFilm, brideDressedUpTime, brideName, brideId, brideMobile, brideDressedUpPlace, brideDressedUpNotes, groomDressedUpTime, groomName, groomId, groomMobile, groomDressedUpPlace, groomDressedUpNotes, ceremonyTime, ceremonyPlace, ceremonyNotes, celebrationTime, celebrationPlace, celebrationNotes, additionalInfo }),
  update)

/**
 * @api {delete} /weddings/:id Delete weddings
 * @apiName DeleteWeddings
 * @apiGroup Weddings
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Weddings not found.
 * @apiError 401 user access only.
 */
router.delete('/:id',
  token({ required: true }),
  destroy)

export default router
