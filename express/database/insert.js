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
    const qry = `
        INSERT INTO zooUser
                (username, password, name, surname,
                sex, phone, email,birthday) VALUES 
                ('${v.username}', '${v.password}', 
                '${v.name}', '${v.surname}', 'm', 
                '${v.phone}', '${v.email}' ,'${bday}');
        INSERT INTO visitor(username, total_money) VALUES
                ('${v.username}', 0);
    `
    const client = getClient();
    client.query(qry, (err,res)=>{
        if(err!==null) console.log(err,qry);
        
    })
}

const insertCoordinators = (v) => {
    var bday = v.birthday.substr(0,10);
    const qry = `
        INSERT INTO zooUser
                (username, password, name, surname,
                sex, phone, email,birthday) VALUES 
                ('${v.username}', '${v.password}', 
                '${v.name}', '${v.surname}', 'm', 
                '${v.phone}', '${v.email}' ,'${bday}');
        INSERT INTO employee(username, salary, job_title) VALUES
                ('${v.username}', ${v.salary}, '${v.job_title}');
        INSERT INTO Coordinator(username, degree) VALUES
                    ('${v.username}', '${v.degree}')
    `
    const client = getClient();
    client.query(qry, (err,res)=>{
        if(err!==null) console.log(err,qry);
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

const insertKeeper = (v) => {
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
        INSERT INTO keeper(username) VALUES
                    ('${v.username}')
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

const insertInvite = (v) => {
    const qry = `INSERT INTO invite
                    (id,event_name, event_date, inviter, invitee, request_status) VALUES 
                    ('${uuidV4()}','${v.ename}', '${v.edate}', '${v.inviter}', '${v.invitee}', 'a');
                `
    const client = getClient();
    client.query(qry, (err,res)=>{
        if(err!==null) console.log(err,qry);
    }) 
}

const insertCreates = (v) => {
    const qry = `INSERT INTO creates
                    (event_name, event_date, c_username ) VALUES 
                    ('${v.ename}', '${v.edate}', '${v.username}');
                `
    const client = getClient();
    client.query(qry, (err,res)=>{
        if(err!==null) console.log(err,qry);
    }) 
}

const updateInvite = (v) => {
    const qry = `update invite set request_status = '${v.status}' where id='${v.id}'`
    const client = getClient();
    client.query(qry, (err,res)=>{
         console.log(err,res,qry);
    }) 
}

const insertTreatment = (v) => {
    const qry = `INSERT INTO treatment
                    (id, requested, requester, animal_name, animal_type, request_status, condition) VALUES 
                    ('${uuidv4()}','${v.requested}', '${v.requester}', 
                    '${v.animal_name}', '${v.animal_type}', 'a', '${v.condition}');
                `
    const client = getClient();
    client.query(qry, (err,res)=>{
        if(err!==null) console.log(err,qry);
    }) 
}


const updateTreatment = (v) => {
    const qry = `update treatment set request_status = '${v.status}' where id = '${v.id}'`

    const client = getClient();
    client.query(qry, (err,res)=>{
        if(err!==null) console.log(err,qry);
    }) 
}

// EVENT RELATED
const insertGroupTour = (v) => {
    const qry = `INSERT INTO Event
                    (event_name, event_date, explanation, length, coord_un) VALUES 
                    ('${v.event_name}', '${v.event_date}', 
                    '${v.explanation}', '${v.length}', '${v.coord_un}');
                INSERT INTO Group_Tour
                    (event_name, event_date, capacity, price)
                    VALUES ('${v.event_name}', '${v.event_date}', '${v.capacity}', '${v.price}');
                `
    const client = getClient();
    client.query(qry, (err,res)=>{
        if(err!==null) console.log(err,qry);
    }) 
}


const insertEducationalEvent = (v) => {
    const qry = `INSERT INTO Event
                    (event_name, event_date, explanation, length, coord_un) VALUES 
                    ('${v.event_name}', '${v.event_date}', 
                    '${v.explanation}', '${v.length}', '${v.coord_un}');
                INSERT INTO Educational_Event
                    (event_name, event_date, topic)
                    VALUES ('${v.event_name}', '${v.event_date}', '${v.topic}');
                `
    const client = getClient();
    client.query(qry, (err,res)=>{
        if(err!==null) console.log(err,qry);
    })
        
}
const insertConservationOrganization = (v) => {
    const qry = `INSERT INTO Event
                    (event_name, event_date, explanation, length, coord_un) VALUES 
                    ('${v.event_name}', '${v.event_date}', 
                    '${v.explanation}', '${v.length}', '${v.coord_un}');
                INSERT INTO Conservation_Organization
                    (event_name, event_date, purpose, target_money, target_place)
                    VALUES ('${v.event_name}', '${v.event_date}', '${v.purpose}', ${v.target_money}, '${v.target_place}');
                `
    const client = getClient();
    client.query(qry, (err,res)=>{
        if(err!==null) console.log(err,qry);
    })   
}
const insertComment = (v) => {
    const qry = `INSERT INTO Comment
                    (event_name, comment_id, message, comment_date) VALUES 
                    ('${v.event_name}', '${uuidV4()}', '${v.message}', '${v.comment_date}');
                `
    const client = getClient();
    client.query(qry, (err,res)=>{
        if(err!==null) console.log(err,qry);
    })   
}
const insertComplaintForm = (v) => {
    const qry = `INSERT INTO Complaint_Form
                    (event_name, form_id, message, complaint_type, response, complaint_date) VALUES 
                    ('${v.event_name}', '${uuidV4()}', '${v.message}', '${v.complaint_type}', '${v.response}', '${v.complaint_date}');
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

const addMoney = async (v) => {
    const qry = ` update visitor set total_money = total_money+'₺${v.amount}' where username ='${v.username}';`
    
    const client = getClient();
    return client.query(qry).then((res,err)=>{
        if(err) return {exists: false,  message: "Uh oh there is a server error"}
        else return {exists: true,  message: "Money updated, Cheers!"}
         
    })

}

const insertVeterinarian = (v) => {
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
        INSERT INTO veterinarian(username, degree) VALUES
                    ('${v.username}', '${v.degree}')
    `
    const client = getClient();
    client.query(insertVisitorText, (err,res)=>{
        if(err!==null) console.log(err,insertVisitorText);
    })
}

const insertCage = (v)=>{
    const qry = `INSERT INTO cage(cage_id, address)
                values ('${v.id}','${v.address}')`
    const client = getClient();
    client.query(qry, (err,res)=>{
        if(err!==null) console.log(err,qry);
    })
}

const insertAssign = (v)=>{
    const qry = `INSERT INTO assigns(k_username, cage_id, c_username, start_date, end_date)
                values ('${v.keeper}','${v.cage}','${v.coord}','${v.start}','${v.end}')`
    const client = getClient();
    client.query(qry, (err,res)=>{
        if(err!==null) console.log(err,qry);
    })
}

const insertRegularize = (v) => {
    const qry = `INSERT INTO regularize(cage_id, food_id, username, portion, frequency)
                values ('${v.cage}','${v.food}','${v.keep}','${v.portion}','${v.freq}')`
    const client = getClient();
    client.query(qry, (err,res)=>{
        if(err!==null) console.log(err,qry);
    })
}

exports.insertCage = insertCage;
exports.insertRegularize = insertRegularize;
exports.insertAssign = insertAssign;
exports.insertGiftshop = insertGiftshop;
exports.insertGiftshopManager = insertGiftshopManager;
exports.insertVisitor = insertVisitor;
exports.insertFood = insertFood;
exports.insertAnimal = insertAnimal;
exports.insertGift = insertGift;
exports.insertTreatment = insertTreatment;
exports.updateTreatment = updateTreatment;
exports.insertInvite = insertInvite;
exports.updateInvite = updateInvite;
exports.addMoney = addMoney;
exports.insertVeterinarian = insertVeterinarian;
exports.insertKeeper = insertKeeper;
exports.updateTreatment = updateTreatment;
exports.insertGroupTour = insertGroupTour;
exports.insertEducationalEvent = insertEducationalEvent;
exports.insertConservationOrganization = insertConservationOrganization;
exports.insertCoordinators = insertCoordinators;
exports.buy = buy;
exports.insertCreates = insertCreates;

exports.insertComment = insertComment;
exports.insertComplaintForm = insertComplaintForm;