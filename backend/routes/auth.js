const express = require('express')
const router = express.Router()

const org = process.env.ORG

// importing data model schemas
const { auth } = require('../models/models')