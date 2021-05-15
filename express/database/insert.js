const { getClient } = require("./db")
const { v4 : uuidv4 } = require('uuid');
const { uuid1, uuid2, uuid3, uuid4, uuid5, uuid6, uuid7, uuid8, uuid9, uuid10 } = require("./uuid");

const insertFood = (v) => {
    var uid = v.food_id;
    const insertFoodText = `
        INSERT INTO Food
            (food_id, stock, name) VALUES
            ('${uid}', '${v.stock}', '${v.name}');`
    const client = getClient();
    client.query(insertFoodText, (err,res) =>{
        if(err!=null) console.log(err, insertFoodText);
    })
}

// type vaccine to be added.
const insertAnimal = (v) => {
    var uid = v.food_id;
    var uid_c = v.cage_id;
    const insertAnimalText = `
        INSERT INTO Animals
            (name, type, gender, weight, birthday, biography, notable_features, food_id, cage_id)
            VALUES
            ('${v.name}', '${v.type}', '${v.gender}', '${v.weight}', '${v.birthday}', '${v.biography}', '${v.notable_features}', '${uid}', '${uid_c}');`
    const client = getClient();
    client.query(insertAnimalText, (err, res) => {
        if(err!=null) console.log(err, insertAnimalText);
    })
}

const { v4:uuidV4 } = require("uuid")


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

const insertGift = (v) => {
    const qry = `INSERT INTO Gift
                (product_code, price, name, animal_name, animal_type, shop, discount)
                VALUES ('${uuidV4()}', ${v.price}, '${v.name}', '${v.animal_name}',
                 '${v.animal_type}', '${v.shop}', ${v.discount})
                `
    const client = getClient();
    client.query(qry, (err,res)=>{
        if(err!==null) console.log(err,qry);
    })
}

// EVENT RELATED
const insertGroupTour = (v) => {
    const qry = `INSERT INTO Group_Tour
                (event_name, event_date, capacity, price)
                VALUES ('${v.event_name}', '${v.event_date}', ${v.capacity}, ${v.price})
                `
    const client = getClient();
    client.query(qry, (err,res)=>{
        if(err!==null) console.log(err,qry);
    })
        
}
const buy = async (v) => {

    //select username from gift g, visitor v where g.product_code = '40030309-bf33-4af3-986d-4553975919df' and v.username='aaa' and v.total_money >= g.price;
    const isAbleTo = `select username from gift g, visitor v 
            where g.product_code = '${v.product_code}' and v.username='${v.username}' 
            and v.total_money >= g.price LIMIT 1`

    const buy = `update visitor set 
                total_money = total_money - 
                    (select price from gift 
                    where product_code='${v.product_code}') 
                    WHERE username='${v.username}'; 
                INSERT INTO buys(username, product_code, buy_date) 
                VALUES('${v.username}', '${v.product_code}', NOW());`

    const client = getClient();
    return client.query(isAbleTo).then((res,err)=>{
        if(err) return {exists: false,  message: "Uh oh there is a server error"}
        else {
            if(res.rows.length === 0) return {exists: false,  message: "You do not have enough money"}
            else return client.query(buy).then((res,err)=>{
                if(err) return {exists: false,  message: "Uh oh there is a server error"}
                else return {exists: true,  message: "Bought item, Have a nice day!"}
            })
        }
    })
} 

exports.insertGiftshop = insertGiftshop;
exports.insertGiftshopManager = insertGiftshopManager;
exports.insertVisitor = insertVisitor;
exports.insertFood = insertFood;
exports.insertAnimal = insertAnimal;
exports.insertGift = insertGift;

exports.insertGroupTour = insertGroupTour;
exports.buy = buy;

