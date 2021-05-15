const { getClient } = require("./db")

//data cekileckse async olmali ki await edelim
// need to implement other types of users
const login = async (username, password) => {

    const qry = `select * from 
                (
                    (select username,'visitor' as typ from visitor) 
                    union 
                    (select username,'giftshopManager' as typ from giftshopmanager )
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
    const qry = `select * from gift where shop = '${shop}'`
    const client = getClient();

    return client.query(qry).then((res,err) => {
        if(err) return {exists: false, gifts: null, message: "Uh oh there is a server error"}
        else return {exists: true, gifts: res.rows, message: "All is fine"};
    })
}

exports.login = login;
exports.allShops = allShops;
exports.gifts = gifts;