
/* Añadir un artículo nuevo */

db.inventory.insertMany([
    { item: "pen", 
    qty: 100, 
    size: { 
        h: 7, 
        w: 2, 
        uom: "cm" 
    }, 
    status: "D" 
    },

    { item: "pencil", 
    qty: 100, 
    size: { 
        h: 6, 
        w: 1, 
        uom: "cm" 
    }, 
    status: "B" 
    }
])

