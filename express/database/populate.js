


const { insertGiftshop, insertGiftshopManager, insertAnimal, insertFood } = require("./insert");
const { uuid1, uuid2, uuid3, uuid4, uuid5, uuid6, uuid7, uuid8, uuid9, uuid10 } = require("./uuid");

const date = "2000-05-17T08:04:00.000Z";
console.log(uuid4);
const populateAnimal = () => {
    insertAnimal({
        name:"Animal 1",
        type:"Penguin",
        gender:'M',
        weight:30.0,
        birthday:date,
        biography:"penguen dogdu penguen mutlu",
        notable_features:"penguenim",
        food_id:uuid7,
        cage_id:uuid4
    })
}

const populateFood = () => {
    insertFood({
        food_id:uuid4,
        
        stock:200,
        name:"Banana"
    })
    insertFood({
        food_id:uuid3,
        stock:350,
        name:"Cajun Corner Menu 1"
    })
    insertFood({
        food_id:uuid7,
        stock:600,
        name:"Minestrone Corba"
    })
    insertFood({
        food_id:uuid10,
        stock:5500,
        name:"Steak"
    })
}

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
    populateFood()
    populateAnimal()
}

exports.populate = populate;