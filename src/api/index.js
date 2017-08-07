import axios from 'axios';
import { API_KEY } from '../config.js';
import { Router } from 'express';

const URL = `http://api.openweathermap.org/data/2.5/forecast?mode=json&appid=${API_KEY}`;
const router = new Router();

/**
 * @apiDefine master Master access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine admin Admin access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine user User access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine listParams
 * @apiParam {String} [q] Query to search.
 * @apiParam {Number{1..30}} [page=1] Page number.
 * @apiParam {Number{1..100}} [limit=30] Amount of returned items.
 * @apiParam {String[]} [sort=-createdAt] Order of returned items.
 * @apiParam {String[]} [fields] Fields to be returned.

 */
router.get('/forecast', (req, res) => {
  const url = `${URL}&q=${req.query.city},us&units=imperial`;
  axios.get(url)
    .then(response => res.json(response.data))
    .catch(error => res.send(error.toString()));
});

export default router;
