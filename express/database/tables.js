const { getClient } =  require('./db');


exports.createTables =  function createTables(){
    const client = getClient()

    client.query(`DROP TABLE visitor;
                  DROP TABLE giftshopManager;
                  DROP TABLE employee;
                  DROP TABLE zooUser;
                  DROP TABLE giftshop;
                  DROP TABLE Animals;
                  DROP TABLE Food;
                  `, (err, res) => {
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

    // client.query(`CREATE TABLE Animal_Curator
    //                 (username varchar(20) PRIMARY KEY,
    //                 stipend decimal,
    //                 FOREIGN KEY (username) REFERENCES employee(username))`, (err, res) => {
    //     if(err!=null) console.log(err);
    // })

    client.query(`CREATE TABLE Food
                    (food_id uuid PRIMARY KEY,
                    stock decimal,
                    name char(120))`, (err,res) => {
        if(err!=null) console.log(err);
    })

    client.query(`CREATE TABLE Animals
                    (name char(40),
                    type char(120),
                    gender char(1),
                    weight float,
                    birthday date,
                    biography text,
                    notable_features text,
                    food_id uuid,
                    cage_id uuid,
                    PRIMARY KEY(name, type),
                    FOREIGN KEY(food_id) REFERENCES Food)`, (err, res) => {
        if(err!=null) console.log(err);
    })

}