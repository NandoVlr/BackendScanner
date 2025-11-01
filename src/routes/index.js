import express from 'express';
import whoisController from '../modules/whois/whois.controller.js';
import dnsController from '../modules/dns/dns.controller.js';

const router = express.Router();

router.get('/whois/:domain', whoisController.analyze);
router.get('/dns/:domain', dnsController.analyze);

export default router;
