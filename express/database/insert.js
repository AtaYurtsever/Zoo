const { getClient } = require("./db")


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
    console.log(insertVisitorText);
    const client = getClient();
    client.query(insertVisitorText, (err,res)=>{
        console.log(err,res);
    })
}

exports.insertVisitor = insertVisitor;