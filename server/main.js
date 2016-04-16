import { Meteor } from 'meteor/meteor';
import {setConfig} from 'meteor/nicolaslopezj:flow';
import confirm from './confirm';

const rootUrl = process.env.ROOT_URL;

setConfig({
  publicKey: Assets.getText('flow.pubkey'),
  confirm: confirm,
  paymentTypes: 1,
  integrationType: 'd',
  baseUrl: rootUrl.replace('localhost', '190.162.215.12'),
});
