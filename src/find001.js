
/* Ejemplos de find */

db.inventory.find( { status: "D" } )

db.inventory.find( { status: { $eq: "D" } } )

db.inventory.find( { status: { $in: [ "A", "D" ] } } )

db.inventory.find( { status: { $in: [ "A", "D" ] } } ).count()

db.inventory.find( { $or: [ { status: { $eq: "A" } }, { status: { $eq: "D" } } ] } ).pretty()

/* $and implícito */

db.inventory.find( { qty: 100, status: "D" } )

/* Los documentos con qty = 100 y status = "D" */

db.inventory.find( { $and: [ { qty: 100 }, { status: "D" } ] } )

/* Los documentos con qty $eq 100 y status $eq "D" */

db.inventory.find( { $and: [ { qty: {$eq: 100} }, { status: {$eq: "D" } } ] } )

/* No se puede usar el mismo campo en un $and implícito */

db.inventory.find({
    qty: {$lt:55},
    qty:{$gt:45}
})

db.inventory.find({
    qty: {$and: [ {$lt:55}, {$gt:45} ] }
})

db.inventory.find({}).count()
