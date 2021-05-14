const { getClient } =  require('./db');


exports.createTables =  function createTables(){
    const client = getClient()
    client.query(`CREATE TABLE zooUser
                (username varchar(20) PRIMARY KEY, 
                password varchar(40) NOT NULL,
                name char(40),
                surname char(40),
                sex char(1), 
                phone bigint, 
                email varchar(100) UNIQUE,
                birthday DATE)`, (err, res) => {
        console.log(err,res);
    })

    client.query(`CREATE TABLE Visitor
                    (username varchar(20) PRIMARY KEY,
                    total_money money,
                    FOREIGN KEY (username) REFERENCES zooUser(username))`, (err, res) => {
        console.log(err,res);
    })
    
}