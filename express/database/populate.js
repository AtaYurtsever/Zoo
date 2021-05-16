const { uuid1, uuid2, uuid3, uuid4, uuid5, uuid6, uuid7, uuid8, uuid9, uuid10 } = require("./uuid");
const { insertConservationOrganization,
     insertEducationalEvent, 
     insertCoordinators, 
     insertGroupTour, 
     insertGiftshop, 
     insertGiftshopManager, 
     insertGift, 
     insertAnimal, 
     insertFood, 
     insertVeterinarian, 
     insertInvite,
     insertKeeper,
     insertTreatment, 
     insertCage,
     insertAssign} = require("./insert")


const date = "2000-05-17T08:04:00.000Z";
console.log(uuid4);

const populateCage = () => {
    insertCage({
        id: uuid4,
        address: "cage 4: somewhere cold",
    })

    insertCage({
        id: uuid5,
        address: "cage 5: somewhere else",
    })
}

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
        cage_id:uuid5
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
        cage_id:uuid5
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

const populateEducationalEvents = () => {
    insertEducationalEvent({
        event_name:"Seminar on Fish",
        event_date: date,
        topic: "fish life",
        explanation: "we will be get educated on fish and the meaning of life",
        length: 2,
        coord_un: "coord1"
    })
    insertEducationalEvent({
        event_name:"Meaning of Life",
        event_date: date,
        topic: "what is the meaning of life?",
        explanation: "this educational event will be very sad",
        length: 3,
        coord_un: "coord2"
    })
    insertEducationalEvent({
        event_name:"Understanding Ocean Ecosystem",
        event_date: date,
        topic: "what is going on in the ocean?",
        explanation: "ever wondered what is going on in the ocean? me neither. but education is important.",
        length: 5,
        coord_un: "coord1"
    })
}

const populateConservationOrganizations = () => {
    insertConservationOrganization({
        event_name:"World Wide Fund for Nature",
        event_date: date,
        purpose: "meeting for WWF",
        target_money: 400000,
        target_place: "seminar room I",
        explanation: "The mission of WWF is to stop the degradation of the planet’s natural environment and to build a future in which people live in harmony with nature, by: conserving the world’s biological diversity ensuring that the use of renewable natural resources is sustainable promoting the reduction of pollution and wasteful consumption.",
        length: 2,
        coord_un: "coord1"
    })
    insertConservationOrganization({
        event_name:"Society for the Protection of Birds",
        event_date: date,
        purpose: "lets unit for protection of birdz!",
        target_money: 9000000,
        target_place:"seminar room II",
        explanation: "The RSPB is the UKs largest nature conservation organisation and charity, inspiring everyone to give nature a home. Together with our partners, they protect threatened birds and wildlife so that towns, coast and countryside will once again teem with life.",
        length: 2,
        coord_un: "coord2"
    })
    insertConservationOrganization({
        event_name:"The Nature Conservancy",
        event_date: date,
        purpose: "we must conserve nature ASAP!",
        target_money: 230000,
        target_place: "seminar room VI",
        explanation: "The mission of The Nature Conservancy as a conservation organisation is to conserve the lands and waters on which all life depends. Our vision is a world where the diversity of life thrives, and people act to conserve nature for its own sake and its ability to fulfill our needs and enrich our lives. ",
        length: 7,
        coord_un: "coord1"
    })
}

const populateCoordinators = () => {
    insertCoordinators({
        username: "coord1",
        password: "123",
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
        password: "123",
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

const populateVeterinarianKeeper = () => {
    insertVeterinarian({
        username: "vetty",
        password: "123",
        name: "Vetty",
        surname: "Bobba",
        phone: "345435342",
        email: "bobbaaa@gmail.com",
        birthday: date,
        salary: 7650,
        job_title: "Senior Vetrinarian",
        degree: "Vet PhD"
    })

    insertKeeper({
        username: "keepy",
        password: "123",
        name: "Ketty",
        surname: "Bobba",
        phone: "34435342",
        email: "bombbaaar@gmail.com",
        birthday: date,
        salary: 7650,
        job_title: "Senior Vetrinarian",
    })
}

const populateTreatmentInvite = () => {
    insertTreatment({
        requested: "vetty",
        requester: "keepy",
        animal_name: "Pinchy",
        animal_type: "crab",
        condition: "Skin rash"
    })

    insertTreatment({
        requested: "vetty",
        requester: "keepy",
        animal_name: "Kicky",
        animal_type: "panda",
        condition: "cannot kick"
    })

    insertInvite({
        ename: "Seminar on Fish",
        edate: date,
        inviter: "coord1",
        invitee: "vetty"
    })

    insertAssign({
        keeper: "keepy",
        coord: "coord1",
        cage: uuid4,
        start:date,
        end:date
    })

    insertAssign({
        keeper: "keepy",
        coord: "coord1",
        cage: uuid5,
        start:date,
        end:date
    })
}

const populate = ()=>{
    populateCage()
    populateFood()
    populateAnimal()
    populategiftShops()
    populateCoordinators()
    populateGroupTours()
    populateVeterinarianKeeper()
    populateEducationalEvents()
    populateConservationOrganizations()
    populateTreatmentInvite()
}

exports.populate = populate;