const { getClient } = require("./db")

//data cekileckse async olmali ki await edelim
// need to implement other types of users
const login = async (username, password) => {

    const qry = `select * from 
                (
                    (select username,'visitor' as typ from visitor) 
                    union 
                    (select username,'giftshopManager' as typ from giftshopmanager )
                    union
                    (select username,'vet' as typ from veterinarian )
                ) as utyp 
                natural join zooUser
                WHERE username = '${username}' AND password = '${password}'
                LIMIT 1`
    const client = getClient();
    
    return client.query(qry).then((res,err) => {
        if (err) { console.log(err);return {exists:false, user:null, type: "none"}}
        if(res.rows.length === 0) return {exists:false, user:null, type: "none"}   
        else return {exists:"true", user: res.rows[0], type:res.rows[0].typ}
    })
}

const allShops = async () => {
    const qry = `select * from giftshop`

    const client = getClient();

    return client.query(qry).then((res,err) => {
        if(err) return {exists: false, shops: null, message: "Uh oh there is a server error"}
        else return {exists: true, shops: res.rows, message: "All is fine"};
    })
}

const gifts = async(shop) => {
    const qry = `select * from gift where shop = '${shop}' and product_code not in(select product_code from buys);`
    const client = getClient();

    return client.query(qry).then((res,err) => {
        if(err) return {exists: false, gifts: null, message: "Uh oh there is a server error"}
        else return {exists: true, gifts: res.rows, message: "All is fine"};
    })
}

const giftsSearch = async(v) => {
    const qry = `select * from gift where shop = '${v.shop}' and product_code not in(select product_code from buys) and name like '%${v.search}%' and price::DECIMAL >= ${v.min} and price::DECIMAL <= ${v.max};`
    const client = getClient();

    return client.query(qry).then((res,err) => {
        if(err) return {exists: false, gifts: null, message: "Uh oh there is a server error"}
        else return {exists: true, gifts: res.rows, message: "All is fine"};
    })
}

// EVENTS
const allGroupTours = async () => {
    const qry = `select * from Group_Tour`
    const client = getClient();

    return client.query(qry).then((res,err) => {
        if(err) return {exists: false, value: null, message: "Uh oh there is a server error"}
        else return {exists: true, value: res.rows, message: "All is fine"};
    })
}

const allEducationalEvents = async () => {
    const qry = `select * from Educational_Event`
    const client = getClient();

    return client.query(qry).then((res,err) => {
        if(err) return {exists: false, value: null, message: "Uh oh there is a server error"}
        else return {exists: true, value: res.rows, message: "All is fine"};
    })
}

const allConservationOrganizations = async () => {
    const qry = `select * from Conservation_Organization`
    const client = getClient();

    return client.query(qry).then((res,err) => {
        if(err) return {exists: false, value: null, message: "Uh oh there is a server error"}
        else return {exists: true, value: res.rows, message: "All is fine"};
    })
}

const groupTour = async (ename) => {
    const qry = `select * from  Group_Tour natural join Event where event_name = '${ename}'`
    const client = getClient();

    return client.query(qry).then((res,err) => {
        if(err) return {exists: false, value: null, message: "Uh oh there is a server error"}
        else return {exists: true, value: res.rows[0], message: "All is fine"};
    })
}

const conservationOrganization = async (ename) => {
    const qry = `select * from Conservation_Organization natural join Event where event_name = '${ename}'`
    const client = getClient();

    return client.query(qry).then((res,err) => {
        if(err) return {exists: false, value: null, message: "Uh oh there is a server error"}
        else return {exists: true, value: res.rows[0], message: "All is fine"};
    })
}

const animal_info = async(aname, atype) => {
    const qry = `select * from  animals where name = '${aname}' and type = '${atype}'`
    console.log(qry, aname, atype)
    const client = getClient();

    return client.query(qry).then((res,err) => {
        if(err) return {exist:false, value:null, message: "Uh oh there is a server error"}
        else return {exists: true, value: res.rows[0], message: "All is fine"};
    })
}

const educationalEvent = async (ename) => {
    const qry = `select * from Educational_Event natural join Event where event_name = '${ename}'`
    const client = getClient();

    return client.query(qry).then((res,err) => {
        if(err) return {exists: false, value: null, message: "Uh oh there is a server error"}
        else return {exists: true, value: res.rows[0], message: "All is fine"};
    })
}

const visitor = async (vuname) => {
    const qry = `select * from visitor natural join zoouser where username = '${vuname}' LIMIT 1`

    const client = getClient();

    return client.query(qry).then((res,err) => {
        if(err) return {exists: false, visitor: null, message: "Uh oh there is a server error"}
        else return {exists: true, visitor: res.rows[0], message: "All is fine"};
    })
}

const gsm = async (guname) => {
    const qry = `select * from giftshopManager natural join employee natural join zoouser where username = '${guname}' LIMIT 1`

    const client = getClient();

    return client.query(qry).then((res,err) => {
        if(err) return {exists: false, gsm: null, message: "Uh oh there is a server error"}
        else return {exists: true, gsm: res.rows[0], message: "All is fine"};
    })
}


const soldStuff = async (guname) => {
    const qry = `select * from (select product_code, g.name, g.shop, price*(1-discount) as saleValue, price, discount from gift g join (giftshop gs  join (select * from GiftshopManager where username='${guname}') gsm on gsm.shop_name = gs.name) gms on g.shop = gms.shop_name) as ps natural join buys;`

    const client = getClient();

    return client.query(qry).then((res,err) => {
        if(err) return {exists: false, value: null, message: "Uh oh there is a server error"}
        else return {exists: true, value: res.rows, message: "All is fine"};
    })
}

const profit = async (guname) => {
    const qry = `select gmsusername, max(salevalue), sum(salevalue) from (select product_code, username as gmsUsername, g.name, price*(1-discount) as saleValue from gift g join (giftshop gs  join (select * from GiftshopManager where username = '${guname}') gsm on gsm.shop_name = gs.name) gms on g.shop = gms.shop_name) as ps natural join (select * from buys where buy_date >= current_date + integer '-7' ) as b GROUP BY gmsUsername LIMIT 1;`
    const client = getClient();

    return client.query(qry).then((res,err) => {
        if(err) return {exists: false, value: null, message: "Uh oh there is a server error"}
        else if(res.rows.length === 0) return {exists: false, value: null, message: "Hmm you don't seem to have sold anything"}
        else return {exists: true, value: res.rows[0], message: "All is fine"};
    })
}

// Animals Related
const allAnimals = async() => {
    const qry = `select * from Animals`

    const client = getClient();

    return client.query(qry).then((res,err) => { 
        if(err) return {exists: false, animals: null, message: "Uh oh there is a server error"}
        else return {exists: true, animals: res.rows, message: "All is fine"};
    })
}

const invited = async(v)=>{
    const qry = `select * from invite where invitee='${v.username}'` 

    const client = getClient();

    return client.query(qry).then((res,err) => { 
        if(err) return {exists: false, value: null, message: "Uh oh there is a server error"}
        else return {exists: true, value: res.rows, message: "All is fine"};
    })
}

const requested = async(v)=>{
    const qry = `select * from treatment where requested='${v.username}'` 

    const client = getClient();

    return client.query(qry).then((res,err) => { 
        if(err) return {exists: false, value: null, message: "Uh oh there is a server error"}
        else return {exists: true, value: res.rows, message: "All is fine"};
    })
}

const keeper = async(uname) => {
    const qry = `select * from keeper natural join employee natural join zoouser where username = '${uname}' LIMIT 1`

    const client = getClient();

    return client.query(qry).then((res,err) => { 
        if(err) return {exists: false, value: null, message: "Uh oh there is a server error"}
        else return {exists: true, value: res.rows[0], message: "All is fine"};
    })
}

const vet = async(uname) => {
    const qry = `select * from veterinarian natural join employee natural join zoouser where username = '${uname}' LIMIT 1`

    const client = getClient();

    return client.query(qry).then((res,err) => { 
        if(err) return {exists: false, value: null, message: "Uh oh there is a server error"}
        else return {exists: true, value: res.rows[0], message: "All is fine"};
    })
}

exports.vet = vet;
exports.keeper = keeper;
exports.invited = invited;
exports.requested = requested;
exports.giftsSearch = giftsSearch;
exports.gsm = gsm;
exports.visitor = visitor;
exports.login = login;
exports.allShops = allShops;
exports.gifts = gifts;
exports.profit = profit;
exports.soldStuff = soldStuff;
exports.allAnimals = allAnimals;
exports.allGroupTours = allGroupTours;
exports.allEducationalEvents = allEducationalEvents;
exports.allConservationOrganizations = allConservationOrganizations;
exports.groupTour = groupTour;
exports.conservationOrganization = conservationOrganization;
exports.educationalEvent = educationalEvent;
exports.animal_info = animal_info;

