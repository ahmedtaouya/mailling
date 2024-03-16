const express = require("express")
const router = express.Router()

const MailingContrtoller = require('../contellers/maillingcontellers')

router.post('/SendEmail', MailingContrtoller.SayfatMail)

module.exports = router