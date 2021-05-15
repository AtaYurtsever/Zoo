const { getClient } = require("./db")
const { v4 : uuidv4 } = require('uuid');

const insertFood = (v) => {
    const u1 = uuidv4();
    const insertFoodText = `
        INSERT INTO Food
            (food_id, stock, name) VALUES
            ('${u1}', '${v.stock}', '${v.name}');`
    const client = getClient();
    client.query(insertFoodText, (err,res) =>{
        if(err!=null) console.log(err, insertFoodText);
    })
}

// type vaccine to be added.
const insertAnimal = (v) => {
    const insertAnimalText = `
        INSERT INTO Animals
            (name, type, gender, weight, birthday, biography, notable_features, food_id, cage_id)
            VALUES
            ('${v.name}', '${type}', '${gender}', '${weight}, '${birthday}', '${biography}', '${notable_features}', '${food_id}', '${cage_id}');`
    const client = getClient();
    client.query(insertAnimalText, (err, res) => {
        if(err!=null) console.log(err, insertAnimalText);
    })
}


const insertVisitor = (v) => {
    var bday = v.birthday.substr(0,10);
    const insertVisitorText = `
        INSERT INTO zooUser
                (username, password, name, surname,
                sex, phone, email,birthday) VALUES 
                ('${v.username}', '${v.password}', 
                '${v.name}', '${v.surname}', 'm', 
                '${v.phone}', '${v.email}' ,'${bday}');
        INSERT INTO visitor(username, total_money) VALUES
                    ('${v.username}', 0)
    `
    const client = getClient();
    client.query(insertVisitorText, (err,res)=>{
        if(err!==null) console.log(err,insertVisitorText);
        
    })
}

const insertGiftshop = (v) => {
    var opening_date = v.opening_date.substr(0,10);
    const insertGiftshopText = `
        INSERT INTO giftshop
                (name, address, opening_date) VALUES 
                ('${v.name}', '${v.address}', 
                '${opening_date}');`
    const client = getClient();
    client.query(insertGiftshopText, (err,res)=>{
        if(err!==null) console.log(err,insertGiftshopText);
    })
}

const insertGiftshopManager = (v) => {
    var bday = v.birthday.substr(0,10);
    const insertVisitorText = `
        INSERT INTO zooUser
                (username, password, name, surname,
                sex, phone, email,birthday) VALUES 
                ('${v.username}', '${v.password}', 
                '${v.name}', '${v.surname}', 'm', 
                '${v.phone}', '${v.email}' ,'${bday}');
        INSERT INTO employee(username, salary, job_title) VALUES
                    ('${v.username}', ${v.salary}, '${v.job_title}');
        INSERT INTO giftshopManager(username, shop_name) VALUES
                    ('${v.username}', '${v.giftshop_name}')
    `
    const client = getClient();
    client.query(insertVisitorText, (err,res)=>{
        if(err!==null) console.log(err,insertVisitorText);
    })
}

exports.insertGiftshop = insertGiftshop;
exports.insertGiftshopManager = insertGiftshopManager;
exports.insertVisitor = insertVisitor;
exports.insertFood = insertFood;
exports.insertAnimal = insertAnimal;