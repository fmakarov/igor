/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2306762034")

  // update collection data
  unmarshal({
    "name": "projects"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2306762034")

  // update collection data
  unmarshal({
    "name": "Base_collection"
  }, collection)

  return app.save(collection)
})
