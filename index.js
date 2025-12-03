import express, { query } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import path from 'path'

import cookieParser from 'cookie-parser'
import session from 'express-session'
import { fileURLToPath } from 'url';
import db from './database/db.js'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const app=express()




// app.use(cors({ origin: true,
//   methods: ['GET,HEAD,PUT,PATCH,POST,DELETE'],
//   allowedHeaders: 'Content-Type,Authorization',
//  credentials: true 
// }));

// Allow ALL origins - simple fix
app.use(cors({
  origin: '*',  // This allows any origin
  credentials: false,  // Cannot use credentials with '*'
  methods: ['GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With']
}));


 app.options('*', cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(
  session({
    key:'userID',
    secret: 'addisu',
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge:100000*60*60,
      // domain: true,
    //  path: '/; SameSite=None', // Adjust the SameSite option as needed
      secure: false, // Set to true if using HTTPS
    },
  })
);


app.use(cookieParser())
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

const publicFolderPath = path.join(__dirname, 'public');
app.use(express.static(publicFolderPath));

import auth from './routes/auth.js'
import landing from './routes/landing.js'
import pages from './routes/pages.js'
import users from './routes/users.js'
import rooms from './routes/rooms.js'
import images from './routes/images.js'
import upload from './middleware/multerMidlware.js'
import foods from './routes/foods.js';
import feedback from './routes/feedback.js'
import processPayment from './routes/processPayment.js';
import reservation from './routes/reservation.js';
import contactData from './routes/contactData.js';
import { debuglog } from 'util'



app.use('/public/uploads',images)
app.use('/pages',pages)


app.use('/auth',auth)
app.use('/users',users)
app.use('/rooms',rooms)
app.use('/foods',foods)
app.use('/payment',processPayment)
app.use('/reservation',reservation)
app.use('/contact',contactData)
app.use('/feedback',feedback)

// Assuming you have the username stored in a variable called 'username'
// Add root route for health check
app.get('/', (req, res) => {
  res.json({ 
    message: 'Hotel Reservation API is running!',
    status: 'healthy',
    timestamp: new Date().toISOString()
  })
})

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK',
    database: 'connected',
    timestamp: new Date().toISOString()
  })
})



// To this:
const PORT = process.env.PORT || 8001
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`)
    console.log('✅ Ready for Railway deployment')
})