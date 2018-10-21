import express from 'express';
import axios from 'axios';
import _ from 'lodash';
import { tryCatchWrapper } from '../commons/utils';

const router = express.Router();

router.post(
  '/translate',
  async (req, res) => {
    try {
      const { sourceLang, targetLang, text } = req.body;
      if (_.isEmpty(sourceLang)) throw new Error('Source language must be defined');
      if (_.isEmpty(targetLang)) throw new Error('Target language must be defined');
      if (_.isEmpty(text)) throw new Error('Translate content must be defined');


      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
      
      const result = await axios.get(url);
      const translatedText = _.get(result.data, '[0][0][0]', '');

      res.json(translatedText);
    }
    catch (error) {
      res.status(401).send({
        status: 401,
        message: error.message
      });
    }
  }
);

export default router;