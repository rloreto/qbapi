import _ from 'lodash'
import { success, notFound, authorOrAdmin } from '../../services/response/'
import { Weddings } from '.'

const changePropertiesToUpperCamelCase = obj => {
  var key,
    keys = Object.keys(obj)
  var n = keys.length
  var newobj = {}
  while (n--) {
    key = keys[n]
    newobj[key.charAt(0).toUpperCase() + key.substr(1)] = obj[key]
  }
  return newobj
}

export const create = ({ user, bodymen: { body } }, res, next) => {
  body.segment = user.segment
  var bodyUpperCamelCase = changePropertiesToUpperCamelCase(body)

  return Weddings.create({ ...bodyUpperCamelCase, user })
    .then(authorOrAdmin(res, user, user.segment))
    .then(weddings => weddings.view(true))
    .then(success(res, 201))
    .catch(next)
}

export const index = ({ user, querymen: { query, select, cursor } }, res, next) => {
  console.log(query)
  query.Confirm = true
  query.Segment = user.segment
  return Weddings.find(query, select, cursor)
    .populate('user')
    .then(authorOrAdmin(res, user, user.segment))
    .then(weddings => weddings.map(weddings => weddings.view()))
    .then(success(res))
    .catch(next)
}

export const show = ({ user, params }, res, next) =>
  Weddings.findById(params.id)
    .populate('user')
    .then(notFound(res))
    .then(authorOrAdmin(res, user, user.segment))
    .then(weddings => (weddings ? weddings.view() : null))
    .then(success(res))
    .catch(next)

export const update = ({ user, bodymen: { body }, params }, res, next) => {
  body.segment = user.segment
  var bodyUpperCamelCase = changePropertiesToUpperCamelCase(body)
  console.log(bodyUpperCamelCase)
  return Weddings.findById(params.id)
    .populate('user')
    .then(notFound(res))
    .then(authorOrAdmin(res, user, user.segment))
    .then(wedding => wedding ? _.merge(wedding, bodyUpperCamelCase).save() : null)
    .then(weddings => (weddings ? weddings.view(true) : null))
    .then(success(res))
    .catch(next)
}

export const destroy = ({ user, params }, res, next) =>
  Weddings.findById(params.id)
    .then(notFound(res))
    .then(authorOrAdmin(res, user, user.segment))
    .then(weddings => (weddings ? weddings.remove() : null))
    .then(success(res, 204))
    .catch(next)
