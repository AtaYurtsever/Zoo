const { insertGiftshop, insertGiftshopManager } = require("./insert")

const date = "2000-05-17T08:04:00.000Z";
const populategiftShops = () => {
    insertGiftshop({
        name:"Petsrus",
        address: "my way or highway",
        opening_date: date
    })
    insertGiftshop({
        name:"Nsects",
        address: "buggy road 3/10",
        opening_date: date
    })
    insertGiftshop({
        name:"Pandas Republic of China",
        address: "wo shuo zhongwen, shuo de i dian",
        opening_date: date
    })

    insertGiftshopManager({
        username: "Barney",
        password: "123",
        name: "Barney",
        surname: "The Purple Dinosaur",
        phone: "1234567890",
        email: "BarneY@dino.com",
        birthday: date,
        salary: 3200,
        job_title: "Giftshop Manager",
        giftshop_name: "Petsrus"
    })

    insertGiftshopManager({
        username: "mc",
        password: "123",
        name: "Scrooge",
        surname: "McDuck",
        phone: "1234567890",
        email: "mcD@dino.com",
        birthday: date,
        salary: 3200,
        job_title: "Giftshop Manager",
        giftshop_name: "Nsects"
    })

    insertGiftshopManager({
        username: "po",
        password: "123",
        name: "Po",
        surname: "Dragon Warrior",
        phone: "1234567890",
        email: "po@dino.com",
        birthday: date,
        salary: 3200,
        job_title: "Giftshop Manager",
        giftshop_name: "Pandas Republic of China"
    })
}

const populate = ()=>{
    populategiftShops()
}

exports.populate = populate;