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
  debugger
  body.segment = res.req.user.segment
  var bodyUpperCamelCase = changePropertiesToUpperCamelCase(body)

  return Weddings.create({ ...bodyUpperCamelCase, user })
    .then(weddings => weddings.view(true))
    .then(success(res, 201))
    .catch(next)
}

export const index = ({ querymen: { query, select, cursor } }, res, next) => {
  console.log(query)
  debugger
  query.Confirm = true
  // query.segment = res.req.user.segment
  return Weddings.find(query, select, cursor)
    .populate('user')
    .then(weddings => weddings.map(weddings => weddings.view()))
    .then(success(res))
    .catch(next)
}

export const show = ({ params }, res, next) =>
  Weddings.findById(params.id)
    .populate('user')
    .then(notFound(res))
    .then(weddings => (weddings ? weddings.view() : null))
    .then(success(res))
    .catch(next)

export const update = ({ user, bodymen: { body }, params }, res, next) => {
  var bodyUpperCamelCase = changePropertiesToUpperCamelCase(body)
  console.log(bodyUpperCamelCase)
  return Weddings.findById(params.id)
    .populate('user')
    .then(notFound(res))
    .then(authorOrAdmin(res, user, 'user'))
    .then(
      weddings => {
        bodyUpperCamelCase.segment = res.req.user.segment
        weddings ? _.merge(weddings, bodyUpperCamelCase).save() : null
      }
    )
    .then(weddings => (weddings ? weddings.view(true) : null))
    .then(success(res))
    .catch(next)
}

export const destroy = ({ user, params }, res, next) =>
  Weddings.findById(params.id)
    .then(notFound(res))
    .then(authorOrAdmin(res, user, 'user'))
    .then(weddings => (weddings ? weddings.remove() : null))
    .then(success(res, 204))
    .catch(next)
