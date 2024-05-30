const admin = require('firebase-admin');
// const serviceAccount = require('../assets/safar-2954e-firebase-adminsdk-dzo1v-9cc5825510.json'); // Path to your downloaded service account key

// Initialize the Firebase app with admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://safar-2954e.firebaseio.com' // Replace with your project ID
});

const db = admin.firestore();

// Function to add data to Firestore
async function addData(collectionName, docId, data) {
  try {
    const docRef = db.collection('your-collection-name').doc('your-doc-id'); // Replace with your collection and document IDs
    await docRef.set({
      field1: 'value1',
      field2: 'value2',
      // Add more fields as needed
    });
    console.log('Document successfully written!');
  } catch (error) {
    console.error('Error writing document: ', error);
  }
}

module.exports = {
  addData
};
