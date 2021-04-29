'use strict'

const express = require('express')
const cors = require('cors')
const app = express()
const cookieParser = require('cookie-parser')
let db = require('./database/database')

app.use(express.json())
app.use(cookieParser())
// ! Update origin
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use('/uploads', express.static('uploads'))

app.use('/auth', require('./routes/auth'))
app.use('/painAreas', require('./routes/painAreas'))
app.use('/suggestions', require('./routes/suggestions'))
app.use('/userSuggestions', require('./routes/userSuggestion'))

app.use('/frequently', require('./routes/frequently'))
app.use('/reviews', require('./routes/reviews'))
app.use('/factors', require('./routes//factors'))
app.use('/userFactors', require('./routes/userFactors'))

app.use('/preferences', require('./routes/preferences'))
app.use('/userPreferences', require('./routes/userPreferences'))
app.use('/medications', require('./routes/medications'))
app.use('/classifications', require('./routes/classifications'))
app.use('/userMedications', require('./routes/userMedications'))

app.use('/treatments', require('./routes/treatments/treatments'))
app.use('/studies', require('./routes/treatments/studies'))
app.use('/categories', require('./routes/categories'))
app.use('/learn', require('./routes/treatments/learn'))
app.use('/videos', require('./routes/treatments/videos'))
app.use('/results', require('./routes/treatments/results'))

app.use('/treatmentClassifications', require('./routes/treatments/treatmentClassifications'))
app.use('/userTreatments', require('./routes/treatments/userTreatments'))
app.use('/userFavourites', require('./routes/treatments/userFavourites'))
app.use('/userPlans', require('./routes/treatments/userPlans'))

app.use('/painLevels', require('./routes/painLevels'))
app.use('/effectiveness', require('./routes/effectiveness'))
app.use('/motivations', require('./routes/motivations'))
app.use('/confidence', require('./routes/confidence'))

app.use('/userScs', require('./routes/treatments/userSCs'))
app.use('/userHcps', require('./routes/treatments/userHCPs'))
app.use('/prescribedText', require('./routes/prescribedText'))
app.use('/treatmentText', require('./routes/treatmentText'))
app.use('/preferenceText', require('./routes/preferenceText'))

app.use('/treatmentCategories', require('./routes/treatmentCategories'))
app.use('/preferenceCategories', require('./routes/preferenceCategories'))

app.use('/logs', require('./routes/logs'))

app.use(require('./middleware/logErrors'))
app.use(require('./middleware/errorHandler'))

app.get('/auth', require('./routes/auth'))

db.sync()

const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`Server listening on port ${port} ...`))