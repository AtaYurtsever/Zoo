const { getClient } =  require('./db');

exports.createTables =  function createTables(){
    const client = getClient()

    var qry = ''
    qry +=`       DROP TABLE buys;
                  DROP TABLE attends;
                  DROP TABLE joins;
                  DROP TABLE invite;
                  DROP TABLE g_has_c;
                  DROP TABLE g_has_f;
                  DROP TABLE respond_to;
                  DROP TABLE creates;
                  DROP TABLE Comment;
                  DROP TABLE Complaint_Form;
                  DROP TABLE giftshopManager;
                  DROP TABLE Gift;
                  DROP TABLE giftshop;
                  DROP TABLE Donation;
                  DROP TABLE Conservation_Organization;
                  DROP TABLE Educational_Event;
                  DROP TABLE Animals;
                  DROP TABLE Veterinarian;
                  DROP TABLE Group_Tour;
                  DROP TABLE Event;
                  DROP TABLE Coordinator;
                  DROP TABLE employee;
                  DROP TABLE visitor;
                  DROP TABLE zooUser;
                  DROP TABLE Food;
                 ` 
    
     

    qry +=`CREATE TABLE zooUser
                (username varchar(20) PRIMARY KEY, 
                password varchar(40) NOT NULL,
                name char(40),
                surname char(40),
                sex char(1), 
                phone bigint, 
                email varchar(100) UNIQUE,
                birthday DATE);` 
         
     

    qry +=`CREATE TABLE Visitor
                    (username varchar(20) PRIMARY KEY,
                    total_money money,
                    FOREIGN KEY (username) REFERENCES zooUser(username));` 
         
     

    qry +=`CREATE TABLE Employee
                    (username varchar(20) PRIMARY KEY,
                    salary money,
                    job_title varchar(20),
                    FOREIGN KEY (username) REFERENCES zooUser(username));` 
         
     

    //TODO: maybe add location
    qry +=`CREATE TABLE Giftshop
                    (name varchar(40) PRIMARY KEY,
                    address text,
                    opening_date date);` 
         
     

    qry +=`CREATE TABLE GiftshopManager
                    (username varchar(20) PRIMARY KEY,
                    shop_name varchar(40) NOT NULL,
                    FOREIGN KEY (shop_name) REFERENCES giftShop(name),
                    FOREIGN KEY (username) REFERENCES employee(username));` 
         
     

    // qry +=`CREATE TABLE Animal_Curator
    //                 (username varchar(20) PRIMARY KEY,
    //                 stipend decimal,
    //                 FOREIGN KEY (username) REFERENCES employee(username))` 
    //      
    //  

    qry +=`CREATE TABLE Food
                    (food_id uuid PRIMARY KEY,
                    stock decimal,
                    name char(120));` 
         
     

                    //TODO: CAGE ID
    qry +=`CREATE TABLE Animals
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
                    FOREIGN KEY(food_id) REFERENCES Food);` 
         
     

    qry +=`CREATE TABLE Veterinarian
                    (username varchar(20) PRIMARY KEY, 
                    degree text,
                    FOREIGN KEY (username) REFERENCES employee(username));` 
         
     
    
    qry +=`CREATE TABLE Coordinator
                    (username varchar(20) PRIMARY KEY, 
                    degree text,
                    FOREIGN KEY (username) REFERENCES employee(username));` 
         
     

    // EVENT RELATED ENTITY TABLES
    qry +=`CREATE TABLE Event
                    (event_name VARCHAR(40),
                    event_date date,
                    explanation text,
                    length decimal,
                    coord_un VARCHAR(20),
                    PRIMARY KEY (event_name, event_date),
                    FOREIGN KEY (coord_un) REFERENCES Coordinator(username));` 
         
     

    qry +=`CREATE TABLE  Conservation_Organization
                    ( event_name varchar(40),
                    event_date date,
                    purpose text,
                    target_money decimal,
                    target_place char(40),
                    PRIMARY KEY (event_name, event_date),
                    FOREIGN KEY (event_name, event_date) REFERENCES Event(event_name, event_date));` 
         
     

    qry +=`CREATE TABLE  Educational_Event
                    ( event_name varchar(40),
                    event_date date,
                    topic text,
                    PRIMARY KEY (event_name, event_date),
                    FOREIGN KEY (event_name, event_date) REFERENCES Event(event_name, event_date));` 
         
     

    qry +=`CREATE TABLE  Group_Tour
                    ( event_name varchar(40),
                    event_date date,
                    capacity int, 
                    price decimal,
                    PRIMARY KEY (event_name, event_date),
                    FOREIGN KEY (event_name, event_date) REFERENCES Event(event_name, event_date));` 
         
     

    qry +=`CREATE TABLE  Comment
                    (event_name varchar(40), 
                    comment_id uuid PRIMARY KEY,
                    message text,
                    comment_date date);` 
         
     

    qry +=`CREATE TABLE  Complaint_Form
                    ( event_name varchar(40), 
                    form_id uuid PRIMARY KEY,
                    message text,
                    complaint_type  varchar(40),
                    response  text,
                    complaint_date date);` 
         
     

    // EVENT RELATED RELATION TABLES
    
    qry +=`CREATE TABLE  Donation
                    ( event_name  varchar(40), 
                    date date, 
                    username varchar(20),
                    amount money,
                    FOREIGN KEY (event_name, date) REFERENCES Conservation_Organization,
                    FOREIGN KEY (username) REFERENCES Visitor,
                    PRIMARY KEY(event_name, date, username));` 
         
     

    qry +=`CREATE TABLE  attends
                    ( event_name varchar(40),
                    username varchar(20),
                    event_date date,
                    FOREIGN KEY (event_name, event_date) REFERENCES Educational_Event(event_name, event_date),
                    FOREIGN KEY (username) REFERENCES Visitor(username),
                    PRIMARY KEY (username, event_name, event_date));` 
         
     

    qry +=`CREATE TABLE  joins
                    ( event_name  varchar(40), 
                    date date, 
                    username varchar(20),
                    FOREIGN KEY (event_name, date) REFERENCES Group_Tour,
                    FOREIGN KEY (username) REFERENCES Visitor,
                    PRIMARY KEY(event_name, date, username));` 
         
     

    qry +=`CREATE TABLE  invite
                    ( event_name varchar(40),
                    event_date date,
                    inviter varchar(20), 
                    invitee varchar(20), 
                    request_status char(1),
                    PRIMARY KEY (event_name, event_date, inviter, invitee),
                    FOREIGN KEY (event_name, event_date) REFERENCES Educational_Event(event_name, event_date),
                    FOREIGN KEY (inviter) REFERENCES Coordinator(username),
                    FOREIGN KEY (invitee) REFERENCES Veterinarian(username));` 
         
     

    qry +=`CREATE TABLE  g_has_c
                    ( comment_id uuid PRIMARY KEY,  
                    message text,
                    event_date date,
                    username varchar(20),
                    event_name varchar(40),
                    FOREIGN KEY (event_name, event_date) REFERENCES Group_tour,
                    FOREIGN KEY (username ) REFERENCES Visitor);` 
         
     

    qry +=`CREATE TABLE  g_has_f
                    ( form_id uuid PRIMARY KEY, 
                    message text,
                    event_date date,
                    complaint_type varchar(20),
                    username varchar(20),
                    event_name varchar(40),
                    FOREIGN KEY (event_name, event_date) REFERENCES Group_tour,
                    FOREIGN KEY (username) REFERENCES Visitor);` 
         
     

    qry +=`CREATE TABLE  respond_to
                    ( form_id uuid PRIMARY KEY, 
                    username varchar(20) NOT NULL,
                    status bool NOT NULL,
                    response_txt text,
                    FOREIGN KEY (form_id ) REFERENCES Complaint_Form,
                    FOREIGN KEY (username) REFERENCES Coordinator(username));` 
         
     

    qry +=`CREATE TABLE  creates
                    (event_name varchar(40),
                    event_date date,
                    username varchar(20),
                    FOREIGN KEY (username) REFERENCES Coordinator(username),
                    FOREIGN KEY (event_name, event_date) REFERENCES Event(event_name, event_date),
                    PRIMARY KEY (event_name, event_date));` 
         
     
    

    //TODO: add animals
    qry +=`CREATE TABLE Gift
                    ( product_code uuid PRIMARY KEY,
                    price money,
                    name varchar(40),
                    animal_name char(40),
                    animal_type char(120),
                    shop varchar(40),
                    discount decimal(3,2),
                    FOREIGN KEY (animal_name, animal_type) REFERENCES Animals(name, type),
                    FOREIGN KEY (shop) REFERENCES Giftshop(name) );
                    ` 

    qry += `CREATE TABLE Buys
                ( username varchar(20),
                product_code uuid,
                buy_date date,
                FOREIGN KEY (username) REFERENCES Visitor(username),
                FOREIGN KEY (product_code) REFERENCES Gift(product_code),
                PRIMARY KEY (product_code) )
            `

    console.log(qry);
    client.query(qry,  (err,res) => {console.log(err,res)})    

}