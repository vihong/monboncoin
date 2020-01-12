import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey      : 'AIzaSyBnvw3sdRxcixeCCf29F9a88UP-VpNml3k',
	authDomain  : 'monboncoin-eaf7d.firebaseapp.com',
	databaseURL : 'https://monboncoin-eaf7d.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
