const { getClient } =  require('./db');


exports.createTables =  function createTables(){
    const client = getClient()

    client.query(`DROP TABLE visitor;
                  DROP TABLE giftshopManager;
                  DROP TABLE employee;
                  DROP TABLE zooUser;
                  DROP TABLE Gift;
                  DROP TABLE giftshop;`, (err, res) => {
        if(err!== null) console.log(err );
    })

    client.query(`CREATE TABLE zooUser
                (username varchar(20) PRIMARY KEY, 
                password varchar(40) NOT NULL,
                name char(40),
                surname char(40),
                sex char(1), 
                phone bigint, 
                email varchar(100) UNIQUE,
                birthday DATE)`, (err, res) => {
        if(err!== null) console.log(err );
    })

    client.query(`CREATE TABLE Visitor
                    (username varchar(20) PRIMARY KEY,
                    total_money money,
                    FOREIGN KEY (username) REFERENCES zooUser(username))`, (err, res) => {
        if(err!== null) console.log(err );
    })

    client.query(`CREATE TABLE Employee
                    (username varchar(20) PRIMARY KEY,
                    salary money,
                    job_title varchar(20),
                    FOREIGN KEY (username) REFERENCES zooUser(username))`, (err, res) => {
        if(err!== null) console.log(err );
    })

    //TODO: maybe add location
    client.query(`CREATE TABLE Giftshop
                    (name varchar(40) PRIMARY KEY,
                    address text,
                    opening_date date)`, (err, res) => {
        if(err!== null) console.log(err );
    })

    client.query(`CREATE TABLE GiftshopManager
                    (username varchar(20) PRIMARY KEY,
                    shop_name varchar(40) NOT NULL,
                    FOREIGN KEY (shop_name) REFERENCES giftShop(name),
                    FOREIGN KEY (username) REFERENCES employee(username))`, (err, res) => {
        if(err!== null) console.log(err );
    })

    //TODO: add animals
    client.query(`CREATE TABLE Gift
                    ( product_code uuid PRIMARY KEY,
                    price money,
                    name varchar(40),
                    animal_name char(40),
                    animal_type char(120),
                    shop varchar(40),
                    discount decimal(3,2),` +
                    //FOREIGN KEY (animal_name, animal_type) REFERENCES Animal(name, type),
                    `FOREIGN KEY (shop) REFERENCES Giftshop(name) )
                    `, (err, res) => {
    
        if(err!== null) console.log(err );
    })
    

}