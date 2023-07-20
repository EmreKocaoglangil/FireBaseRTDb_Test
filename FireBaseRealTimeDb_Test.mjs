import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, remove, update } from "firebase/database";




         /*firebase Config*/
const firebaseConfig = {
    apiKey: "AIzaSyAsNr3VoQ8dLQ15e43cGetRdDopRYaX0x8",
    authDomain: "dbtest-cac8c.firebaseapp.com",
    projectId: "dbtest-cac8c",
    storageBucket: "dbtest-cac8c.appspot.com",
    messagingSenderId: "640755820628",
    appId: "1:640755820628:web:92b436508f00574901a5c1",
    databaseURL: 'https://dbtest-cac8c-default-rtdb.europe-west1.firebasedatabase.app'
};
const firebase = initializeApp(firebaseConfig);
const db = getDatabase();
const dbRef = ref(getDatabase());


         /*   Post Data  */

function writeUserData(userId, name, email) {
    
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      
    });
  }
  

         /*  Get Data  */
function getData(){
    get(dbRef).then((snapshot) => {
      if (snapshot.exists()) {
      console.log(snapshot.val());
      } else {
      console.log("No data available");
      }
      }).catch((error) => {
      console.error(error);
  })};
         /*  Update Data  */
function updateData(userId,name) {
    update(ref(db,'users/'+userId),{
        username:name
    
  })

}
         /*   Delete Data  */
function deleteData(userId){
    remove(ref(db,'users/'+userId ))
}






  
 
 