const { uuid1, uuid2, uuid3, uuid4, uuid5, uuid6, uuid7, uuid8, uuid9, uuid10 } = require("./uuid");
const { insertCoordinators, insertGroupTour, insertGiftshop, insertGiftshopManager, insertGift, insertAnimal, insertFood, insertVeterinarian } = require("./insert")


const date = "2000-05-17T08:04:00.000Z";
console.log(uuid4);
const populateAnimal = () => {
    insertAnimal({
        name:"Mr. Tuxedo",
        type:"Penguin",
        gender:'M',
        weight:30.0,
        birthday:date,
        biography:"penguen dogdu penguen mutlu",
        notable_features:"penguenim",
        food_id:uuid7,
        cage_id:uuid4
    })

    insertAnimal({
        name:"Kicky",
        type:"panda",
        gender:'M',
        weight:30.0,
        birthday:date,
        biography:"kicking around",
        notable_features:"not a penguin",
        food_id:uuid7,
        cage_id:uuid4
    })

    insertAnimal({
        name:"Punchy",
        type:"panda",
        gender:'M',
        weight:30.0,
        birthday:date,
        biography:"punching around",
        notable_features:"not a penguin",
        food_id:uuid7,
        cage_id:uuid4
    })

    insertAnimal({
        name:"Aristo",
        type:"red panda",
        gender:'M',
        weight:30.0,
        birthday:date,
        biography:"thinking around",
        notable_features:"not a penguin",
        food_id:uuid7,
        cage_id:uuid4
    })

    insertAnimal({
        name:"Pinchy",
        type:"crab",
        gender:'M',
        weight:30.0,
        birthday:date,
        biography:"getting eaten around",
        notable_features:"not a penguin",
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

    insertGift({
        name: "Kicky the Panda",
        price: 120,
        animal_name:"Kicky",
        animal_type:"panda",
        shop:"Pandas Republic of China",
        discount: 0.05
    })

    insertGift({
        name: "Kicky the Panda",
        price: 120,
        animal_name:"Kicky",
        animal_type:"panda",
        shop:"Pandas Republic of China",
        discount: 0.05
    })

    insertGift({
        name: "Kicky the Panda",
        price: 120,
        animal_name:"Kicky",
        animal_type:"panda",
        shop:"Pandas Republic of China",
        discount: 0.05
    })

    insertGift({
        name: "(Broken)Kicky the Panda",
        price: 120,
        animal_name:"Kicky",
        animal_type:"panda",
        shop:"Pandas Republic of China",
        discount: 0.80
    })

    insertGift({
        name: "Cheap Tea",
        price: 5,
        animal_name:"Punchy",
        animal_type:"panda",
        shop:"Pandas Republic of China",
        discount: 0
    })

    
    insertGift({
        name: "Cheap Tea",
        price: 5,
        animal_name:"Punchy",
        animal_type:"panda",
        shop:"Pandas Republic of China",
        discount: 0
    })

    insertGift({
        name: "Expensive Tea",
        price: 500,
        animal_name:"Aristo",
        animal_type:"red panda",
        shop:"Pandas Republic of China",
        discount: 0
    })

    insertGift({
        name: "Pincer",
        price: 20,
        animal_name:"Pinchy",
        animal_type:"crab",
        shop:"Nsects",
        discount: 0
    })

    insertGift({
        name: "Meat",
        price: 120,
        animal_name:"Pinchy",
        animal_type:"crab",
        shop:"Nsects",
        discount: 0
    })
}


const populateGroupTours = () => {
    insertGroupTour({
        event_name:"Lions Tour",
        event_date: date,
        capacity: 30,
        price: 50,
        explanation: "we will be seing lions!!!",
        length: 2,
        coord_un: "coord1"
    })
    insertGroupTour({
        event_name:"Penguin Exploration",
        event_date: date,
        capacity: 40,
        price: 90,
        explanation: "we will be seing penguinz!!!",
        length: 3,
        coord_un: "coord2"
    })
    insertGroupTour({
        event_name:"Planting Activiy",
        event_date: date,
        capacity: 10,
        price: 500,
        explanation: "we will be planting venus flytraps!!! U should join!!!",
        length: 5,
        coord_un: "coord1"
    })
    insertGroupTour({
        event_name:"Bird Watching Event for Kids",
        event_date: date,
        capacity: 30,
        price: 5,
        explanation: "lets watch birds, shall we ?",
        length: 6,
        coord_un: "coord2"
    })
}

const populateCoordinators = () => {
    insertCoordinators({
        username: "coord1",
        password: "12345",
        name: "Joshua",
        surname: "McBottoms",
        phone: "2132312312",
        email: "joshua@gmail.com",
        birthday: date,
        salary: 5200,
        job_title: "Coordinator",
        degree: "Collage Dropout"
    })
    insertCoordinators({
        username: "coord2",
        password: "6789",
        name: "Teressa",
        surname: "Bobba",
        phone: "345435342",
        email: "bobba@gmail.com",
        birthday: date,
        salary: 7300,
        job_title: "Coordinator Chief",
        degree: "Coordinator PhD"
    })
}

const populateVeterinarian = () => {
    insertVeterinarian({
        username: "vetty",
        password: "6789",
        name: "Vetty",
        surname: "Bobba",
        phone: "345435342",
        email: "bobbaaa@gmail.com",
        birthday: date,
        salary: 7650,
        job_title: "Senior Vetrinarian",
        degree: "Vet PhD"
    })
}

const populate = ()=>{
    populateFood()
    populateAnimal()
    populategiftShops()
    populateCoordinators()
    populateGroupTours()
    populateVeterinarian()
}

exports.populate = populate;