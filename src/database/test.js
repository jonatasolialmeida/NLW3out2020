const Database = require('./db'); // ou ('./db');  ('./db.js');<< é facultativo
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {

// inserir dados na tabela
await saveOrphanage(db, {
    lat: "-22.7447868",
    lng: "-43.486432",
    name: "Lar das meninas",
    about: "Presta assitência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vunerabilidade social",
    whatsapp: "999375777",
    images: [
        "https://images.unsplash.com/photo-1600711725407-2ea4733a38c3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        "https://images.unsplash.com/photo-1595009503377-e3be116106b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    instructions: "Venha se sentir a vontade e traga muito amor e pasciência para dar",
    opening_hours: "Horário de visitas Das 8h até as 18h",
    open_on_weekends: "0"
})

// consultar dados na tabela
        const selectedOrphanages = await db.all("SELECT * FROM orphanages")
        console.log(selectedOrphanages)

        // // consultar somente 1 orfanato, pelo id
        const orphanage = await db.all('SELECT * FROM orphanages WHERE id= "3"')
        console.log(orphanage)

        // // deletar dado da tabela
        // console.log(await db.run("DELETE FROM orphanages WHERE id='4'"))
        // console.log(await db.run("DELETE FROM orphanages WHERE id='5'"))
})

