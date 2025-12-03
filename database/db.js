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





// db.js - Fixed for Railway
import mysql from 'mysql2';

const db = mysql.createConnection({
  // Railway INTERNAL database host
  host: process.env.MYSQLHOST || process.env.DB_HOST || 'mysql.railway.internal',
  
  // Railway auto-injects MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE
  user: process.env.MYSQLUSER || process.env.DB_USER || 'root',
  password: process.env.MYSQLPASSWORD || process.env.DB_PASSWORD || 'UzsVjHxyguNKBeDxDHHURaLpgUQrciAw',
  database: process.env.MYSQLDATABASE || process.env.DB_NAME || 'railway',
  
  // Railway INTERNAL port is 3306
  port: process.env.MYSQLPORT || process.env.DB_PORT || 3306,
  
  // NO SSL for internal Railway connections
  // ssl: undefined (remove this line entirely)
  
  // Connection timeout
  connectTimeout: 10000
});

db.connect((err) => {
  if (err) {
    console.log('❌ Database connection error:', err.message);
    console.log('🔧 Config used:', {
      host: process.env.MYSQLHOST || process.env.DB_HOST || 'mysql.railway.internal',
      port: process.env.MYSQLPORT || process.env.DB_PORT || 3306,
      database: process.env.MYSQLDATABASE || process.env.DB_NAME || 'railway',
      user: process.env.MYSQLUSER || process.env.DB_USER || 'root'
    });
  } else {
    console.log('✅ Database connected to Railway!');
  }
});

export default db;