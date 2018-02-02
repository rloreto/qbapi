import request from 'supertest-as-promised'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Weddings } from '.'

const app = () => express(routes)

let userSession, anotherSession, weddings

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  const anotherUser = await User.create({ email: 'b@b.com', password: '123456' })
  userSession = signSync(user.id)
  anotherSession = signSync(anotherUser.id)
  weddings = await Weddings.create({ user })
})

test('POST /weddings 201 (user)', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ access_token: userSession, name: 'test', place: 'test', email: 'test', mobile: 'test', date: 'test', remainingDays: 'test', sentDossierDate: 'test', confirm: 'test', deposit: 'test', total: 'test', active: 'test', brideHomeFilm: 'test', groomHomeFilm: 'test', brideDressedUpTime: 'test', brideName: 'test', brideId: 'test', brideMobile: 'test', brideDressedUpPlace: 'test', brideDressedUpNotes: 'test', groomDressedUpTime: 'test', groomName: 'test', groomId: 'test', groomMobile: 'test', groomDressedUpPlace: 'test', groomDressedUpNotes: 'test', ceremonyTime: 'test', ceremonyPlace: 'test', ceremonyNotes: 'test', celebrationTime: 'test', celebrationPlace: 'test', celebrationNotes: 'test', additionalInfo: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.place).toEqual('test')
  expect(body.email).toEqual('test')
  expect(body.mobile).toEqual('test')
  expect(body.date).toEqual('test')
  expect(body.remainingDays).toEqual('test')
  expect(body.sentDossierDate).toEqual('test')
  expect(body.confirm).toEqual('test')
  expect(body.deposit).toEqual('test')
  expect(body.total).toEqual('test')
  expect(body.active).toEqual('test')
  expect(body.brideHomeFilm).toEqual('test')
  expect(body.groomHomeFilm).toEqual('test')
  expect(body.brideDressedUpTime).toEqual('test')
  expect(body.brideName).toEqual('test')
  expect(body.brideId).toEqual('test')
  expect(body.brideMobile).toEqual('test')
  expect(body.brideDressedUpPlace).toEqual('test')
  expect(body.brideDressedUpNotes).toEqual('test')
  expect(body.groomDressedUpTime).toEqual('test')
  expect(body.groomName).toEqual('test')
  expect(body.groomId).toEqual('test')
  expect(body.groomMobile).toEqual('test')
  expect(body.groomDressedUpPlace).toEqual('test')
  expect(body.groomDressedUpNotes).toEqual('test')
  expect(body.ceremonyTime).toEqual('test')
  expect(body.ceremonyPlace).toEqual('test')
  expect(body.ceremonyNotes).toEqual('test')
  expect(body.celebrationTime).toEqual('test')
  expect(body.celebrationPlace).toEqual('test')
  expect(body.celebrationNotes).toEqual('test')
  expect(body.additionalInfo).toEqual('test')
  expect(typeof body.user).toEqual('object')
})

test('POST /weddings 401', async () => {
  const { status } = await request(app())
    .post('/')
  expect(status).toBe(401)
})

test('GET /weddings 200 (user)', async () => {
  const { status, body } = await request(app())
    .get('/')
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
  expect(typeof body[0].user).toEqual('object')
})

test('GET /weddings 401', async () => {
  const { status } = await request(app())
    .get('/')
  expect(status).toBe(401)
})

test('GET /weddings/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .get(`/${weddings.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(weddings.id)
  expect(typeof body.user).toEqual('object')
})

test('GET /weddings/:id 401', async () => {
  const { status } = await request(app())
    .get(`/${weddings.id}`)
  expect(status).toBe(401)
})

test('GET /weddings/:id 404 (user)', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
    .query({ access_token: userSession })
  expect(status).toBe(404)
})

test('PUT /weddings/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .put(`/${weddings.id}`)
    .send({ access_token: userSession, name: 'test', place: 'test', email: 'test', mobile: 'test', date: 'test', remainingDays: 'test', sentDossierDate: 'test', confirm: 'test', deposit: 'test', total: 'test', active: 'test', brideHomeFilm: 'test', groomHomeFilm: 'test', brideDressedUpTime: 'test', brideName: 'test', brideId: 'test', brideMobile: 'test', brideDressedUpPlace: 'test', brideDressedUpNotes: 'test', groomDressedUpTime: 'test', groomName: 'test', groomId: 'test', groomMobile: 'test', groomDressedUpPlace: 'test', groomDressedUpNotes: 'test', ceremonyTime: 'test', ceremonyPlace: 'test', ceremonyNotes: 'test', celebrationTime: 'test', celebrationPlace: 'test', celebrationNotes: 'test', additionalInfo: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(weddings.id)
  expect(body.name).toEqual('test')
  expect(body.place).toEqual('test')
  expect(body.email).toEqual('test')
  expect(body.mobile).toEqual('test')
  expect(body.date).toEqual('test')
  expect(body.remainingDays).toEqual('test')
  expect(body.sentDossierDate).toEqual('test')
  expect(body.confirm).toEqual('test')
  expect(body.deposit).toEqual('test')
  expect(body.total).toEqual('test')
  expect(body.active).toEqual('test')
  expect(body.brideHomeFilm).toEqual('test')
  expect(body.groomHomeFilm).toEqual('test')
  expect(body.brideDressedUpTime).toEqual('test')
  expect(body.brideName).toEqual('test')
  expect(body.brideId).toEqual('test')
  expect(body.brideMobile).toEqual('test')
  expect(body.brideDressedUpPlace).toEqual('test')
  expect(body.brideDressedUpNotes).toEqual('test')
  expect(body.groomDressedUpTime).toEqual('test')
  expect(body.groomName).toEqual('test')
  expect(body.groomId).toEqual('test')
  expect(body.groomMobile).toEqual('test')
  expect(body.groomDressedUpPlace).toEqual('test')
  expect(body.groomDressedUpNotes).toEqual('test')
  expect(body.ceremonyTime).toEqual('test')
  expect(body.ceremonyPlace).toEqual('test')
  expect(body.ceremonyNotes).toEqual('test')
  expect(body.celebrationTime).toEqual('test')
  expect(body.celebrationPlace).toEqual('test')
  expect(body.celebrationNotes).toEqual('test')
  expect(body.additionalInfo).toEqual('test')
  expect(typeof body.user).toEqual('object')
})

test('PUT /weddings/:id 401 (user) - another user', async () => {
  const { status } = await request(app())
    .put(`/${weddings.id}`)
    .send({ access_token: anotherSession, name: 'test', place: 'test', email: 'test', mobile: 'test', date: 'test', remainingDays: 'test', sentDossierDate: 'test', confirm: 'test', deposit: 'test', total: 'test', active: 'test', brideHomeFilm: 'test', groomHomeFilm: 'test', brideDressedUpTime: 'test', brideName: 'test', brideId: 'test', brideMobile: 'test', brideDressedUpPlace: 'test', brideDressedUpNotes: 'test', groomDressedUpTime: 'test', groomName: 'test', groomId: 'test', groomMobile: 'test', groomDressedUpPlace: 'test', groomDressedUpNotes: 'test', ceremonyTime: 'test', ceremonyPlace: 'test', ceremonyNotes: 'test', celebrationTime: 'test', celebrationPlace: 'test', celebrationNotes: 'test', additionalInfo: 'test' })
  expect(status).toBe(401)
})

test('PUT /weddings/:id 401', async () => {
  const { status } = await request(app())
    .put(`/${weddings.id}`)
  expect(status).toBe(401)
})

test('PUT /weddings/:id 404 (user)', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ access_token: anotherSession, name: 'test', place: 'test', email: 'test', mobile: 'test', date: 'test', remainingDays: 'test', sentDossierDate: 'test', confirm: 'test', deposit: 'test', total: 'test', active: 'test', brideHomeFilm: 'test', groomHomeFilm: 'test', brideDressedUpTime: 'test', brideName: 'test', brideId: 'test', brideMobile: 'test', brideDressedUpPlace: 'test', brideDressedUpNotes: 'test', groomDressedUpTime: 'test', groomName: 'test', groomId: 'test', groomMobile: 'test', groomDressedUpPlace: 'test', groomDressedUpNotes: 'test', ceremonyTime: 'test', ceremonyPlace: 'test', ceremonyNotes: 'test', celebrationTime: 'test', celebrationPlace: 'test', celebrationNotes: 'test', additionalInfo: 'test' })
  expect(status).toBe(404)
})

test('DELETE /weddings/:id 204 (user)', async () => {
  const { status } = await request(app())
    .delete(`/${weddings.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(204)
})

test('DELETE /weddings/:id 401 (user) - another user', async () => {
  const { status } = await request(app())
    .delete(`/${weddings.id}`)
    .send({ access_token: anotherSession })
  expect(status).toBe(401)
})

test('DELETE /weddings/:id 401', async () => {
  const { status } = await request(app())
    .delete(`/${weddings.id}`)
  expect(status).toBe(401)
})

test('DELETE /weddings/:id 404 (user)', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
    .query({ access_token: anotherSession })
  expect(status).toBe(404)
})
