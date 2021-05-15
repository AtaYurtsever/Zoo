const { getClient } =  require('./db');

exports.createTables =  function createTables(){
    const client = getClient()

    client.query(`DROP TABLE visitor;
                  DROP TABLE giftshopManager;
                  DROP TABLE employee;
                  DROP TABLE zooUser;
                  DROP TABLE giftshop;
                  DROP TABLE Event;
                  DROP TABLE Conservation_Organization;
                  DROP TABLE Educational_Event;
                  DROP TABLE Group_Tour;
                  DROP TABLE Comment;
                  DROP TABLE Complaint_Form;
                  DROP TABLE Donation;
                  DROP TABLE attends;
                  DROP TABLE joins;
                  DROP TABLE invite;
                  DROP TABLE g_has_c;
                  DROP TABLE g_has_f;
                  DROP TABLE respond-to;
                  DROP TABLE create;`, (err, res) => {
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

    // EVENT RELATED ENTITY TABLES
    client.query(`CREATE TABLE Event
                    (event_name VARCHAR(40),
                    event_date DATE,
                    explanation text,
                    length decimal,
                    coord_un VARCHAR(20)
                    PRIMARY KEY (event_name, event_date),
                    FOREIGN KEY (coord_un) REFERENCES Coordinator(username))`, (err, res) => {
        if(err!== null) console.log(err );
    })

    client.query(`CREATE TABLE  Conservation_Organization
                    ( event_name varchar(40),
                    event_date date,
                    purpose text,
                    target_money decimal,
                    target_place char(40),
                    PRIMARY KEY (event_name, event_date),
                    FOREIGN KEY (event_name, event_date) REFERENCES Event(event_name, event_date))`, (err, res) => {
        if(err!== null) console.log(err );
    })

    client.query(`CREATE TABLE  Educational_Event
                    ( event_name varchar(40),
                    event_date date,
                    topic text,
                    PRIMARY KEY (event_name, event_date),
                    FOREIGN KEY (event_name, event_date) REFERENCES Event(event_name, event_date))`, (err, res) => {
        if(err!== null) console.log(err );
    })

    client.query(`CREATE TABLE  Group_Tour
                    ( event_name varchar(40),
                    event_date date,
                    capacity int, 
                    price decimal,
                    PRIMARY KEY (event_name, event_date),
                    FOREIGN KEY (event_name, event_date) REFERENCES Event(event_name, event_date)))`, (err, res) => {
        if(err!== null) console.log(err );
    })

    client.query(`CREATE TABLE  Comment
                    (comment_id uuid PRIMARY KEY,
                    message varchar(40),
                    comment_date date)`, (err, res) => {
        if(err!== null) console.log(err );
    })

    client.query(`CREATE TABLE  Complaint_Form
                    ( event_name varchar(40), 
                    form_id uuid PRIMARY KEY,
                    message text,
                    complaint_type  varchar(40),
                    response  text,
                    complaint_date date)`, (err, res) => {
        if(err!== null) console.log(err );
    })

    // EVENT RELATED RELATION TABLES
    
    client.query(`CREATE TABLE  Donation
                    ( revent_name  varchar(40), 
                    date date, 
                    username varchar(20),
                    amount money,
                    FOREIGN KEY (event_name, date) REFERENCES Conservation_Organization,
                    FOREIGN KEY (username) REFERENCES Visitor,
                    PRIMARY KEY(event_name, date, username))`, (err, res) => {
        if(err!== null) console.log(err );
    })

    client.query(`CREATE TABLE  attends
                    ( event_name varchar(40),
                    username varchar(20),
                    event_date date
                    FOREIGN KEY (event_name, event_date) REFERENCES Educational_event(event_name, event_date) 
                    FOREIGN KEY (username) REFERENCES Visitor(username),
                    PRIMARY KEY (username, event_name, event_date))`, (err, res) => {
        if(err!== null) console.log(err );
    })

    client.query(`CREATE TABLE  joins
                    ( event_name  varchar(40), 
                    date date, 
                    username varchar(20)
                    FOREIGN KEY (event_name, date) REFERENCES Conservation_Organization,
                    FOREIGN KEY (username) REFERENCES Visitor,
                    PRIMARY KEY(event_name, date, username))`, (err, res) => {
        if(err!== null) console.log(err );
    })

    client.query(`CREATE TABLE  invite
                    ( event_name varchar(40),
                    event_date date,
                    inviter varchar(20), 
                    invitee varchar(20), 
                    request_status char(1),
                    PRIMARY KEY (event_name, event_date, inviter, invitee),
                    FOREIGN KEY (event_name, event_date) REFERENCES Educational_Event(name, date),
                    FOREIGN KEY (inviter) REFERENCES Coordinator(username),
                    FOREIGN KEY (invitee) REFERENCES Veterinarian(username))`, (err, res) => {
        if(err!== null) console.log(err );
    })

    client.query(`CREATE TABLE  g_has_c
                    ( comment_id uuid PRIMARY KEY,  
                    message text,
                    event_date date,
                    username  varchar(20),
                    event_name varchar(40),
                    FOREIGN KEY (event_name, event_date) REFERENCES Group_tour,
                    FOREIGN KEY (username ) REFERENCES Visitor)`, (err, res) => {
        if(err!== null) console.log(err );
    })

    client.query(`CREATE TABLE  g_has_f
                    ( form_id uuid PRIMARY KEY, 
                    message text,
                    event_date date,
                    complaint_type varchar(20),
                    username varchar(20),
                    event_name varchar(40),
                    FOREIGN KEY (event_name, event_date) REFERENCES Group_tour,
                    FOREIGN KEY (username) REFERENCES Visitor)`, (err, res) => {
        if(err!== null) console.log(err );
    })

    client.query(`CREATE TABLE  respond-to
                    ( form_id uuid PRIMARY KEY, 
                    username varchar(20) NOT NULL,
                    status bool NOT NULL,
                    response_txt text,
                    FOREIGN KEY (form_id ) REFERENCES Complaint_Form,
                    FOREIGN KEY (username) REFERENCES Coordinator(username))`, (err, res) => {
        if(err!== null) console.log(err );
    })

    client.query(`CREATE TABLE  create
                    (event_name varchar(40),
                    event_date date,
                    username varchar(20),
                    FOREIGN KEY username REFERENCES Coordinator(username),
                    FOREIGN KEY (event_name) REFERENCES Event(event_name),
                    FOREIGN KEY (event_date) REFERENCES Event(event_date),
                    PRIMARY KEY (event_name, event_date)))`, (err, res) => {
        if(err!== null) console.log(err );
    })
    
}