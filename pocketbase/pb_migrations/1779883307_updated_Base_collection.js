/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2306762034")

  // add field
  collection.fields.addAt(4, new Field({
    "help": "",
    "hidden": false,
    "id": "file2366146245",
    "maxSelect": 0,
    "maxSize": 0,
    "mimeTypes": null,
    "name": "cover",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": null,
    "type": "file"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "help": "",
    "hidden": false,
    "id": "file3760176746",
    "maxSelect": 10,
    "maxSize": 0,
    "mimeTypes": null,
    "name": "images",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": null,
    "type": "file"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "help": "",
    "hidden": false,
    "id": "file250665868",
    "maxSelect": 0,
    "maxSize": 0,
    "mimeTypes": null,
    "name": "pdf",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": null,
    "type": "file"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text2443991567",
    "max": 0,
    "min": 0,
    "name": "shortDesc",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "convertURLs": false,
    "help": "",
    "hidden": false,
    "id": "editor1843675174",
    "maxSize": 0,
    "name": "description",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "help": "",
    "hidden": false,
    "id": "number3145888567",
    "max": null,
    "min": null,
    "name": "year",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "help": "",
    "hidden": false,
    "id": "bool1007901140",
    "name": "featured",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2306762034")

  // remove field
  collection.fields.removeById("file2366146245")

  // remove field
  collection.fields.removeById("file3760176746")

  // remove field
  collection.fields.removeById("file250665868")

  // remove field
  collection.fields.removeById("text2443991567")

  // remove field
  collection.fields.removeById("editor1843675174")

  // remove field
  collection.fields.removeById("number3145888567")

  // remove field
  collection.fields.removeById("bool1007901140")

  return app.save(collection)
})
