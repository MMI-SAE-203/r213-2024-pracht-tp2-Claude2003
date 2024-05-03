/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hs4qjx9tx7349yn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tmmyrilu",
    "name": "prenomAgent",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hs4qjx9tx7349yn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tmmyrilu",
    "name": "prenomAgent_",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
