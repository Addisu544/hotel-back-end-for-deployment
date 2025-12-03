// import mysql, { createConnection } from 'mysql'
// const db=createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'Hotel-reservation-system'
// })
// db.connect((err,res)=>{{
//     if(err){
//         console.log('err while connecting to server',err)
// }
//     else{
//         console.log('Database connected...')
//     }
// }
// })
// export default db;




// import mysql from 'mysql2'

// const db = mysql.createConnection({
//   host: process.env.DB_HOST || 'interchange.proxy.rlwy.net',
//   user: process.env.DB_USER || 'root',
//   password: process.env.DB_PASSWORD || 'UzsVjHxyguNKBeDxDHHURaLpgUQrciAw',
//   database: process.env.DB_NAME || 'railway',
//   // port: process.env.DB_PORT || 27045,
//   port: process.env.DB_PORT || 3306,

//   ssl: { rejectUnauthorized: false }
// })

// db.connect((err) => {
//   if (err) {
//     console.log('Database connection error:', err.message)
//      console.log('Config used:', {
//       host: process.env.DB_HOST || 'mysql.railway.internal',
//       port: 3306,
//       database: process.env.DB_NAME || 'railway'
//     });
//   } else {
//     console.log('Database connected to Railway!')
//   }
// })

// export default db





// db.js - TEMPORARY external connection
import mysql from 'mysql2';

// Use EXTERNAL Railway database URL
const db = mysql.createConnection({
  host: 'interchange.proxy.rlwy.net', // External hostname
  user: 'root',
  password: 'UzsVjHxyguNKBeDxDHHURaLpgUQrciAw',
  database: 'railway',
  port: 27045, // External port
  ssl: { rejectUnauthorized: false }, // SSL required for external
  connectTimeout: 15000
});

db.connect((err) => {
  if (err) {
    console.log('❌ External DB connection error:', err.message);
  } else {
    console.log('✅ Connected to external Railway database!');
  }
});

export default db;