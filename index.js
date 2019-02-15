var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({[key]: value}, object)
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  object = Object.assign({}, object)
  delete object.key
  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return object.key
}
