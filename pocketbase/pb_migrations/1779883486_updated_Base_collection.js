/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2306762034")

  // update field
  collection.fields.addAt(4, new Field({
    "help": "",
    "hidden": false,
    "id": "file2366146245",
    "maxSelect": 0,
    "maxSize": 0,
    "mimeTypes": [
      "image/png",
      "image/jpeg"
    ],
    "name": "cover",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [
      "300x300",
      "600x600",
      "1200x1200"
    ],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2306762034")

  // update field
  collection.fields.addAt(4, new Field({
    "help": "",
    "hidden": false,
    "id": "file2366146245",
    "maxSelect": 0,
    "maxSize": 0,
    "mimeTypes": [
      "image/png",
      "image/jpeg"
    ],
    "name": "cover",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": null,
    "type": "file"
  }))

  return app.save(collection)
})
