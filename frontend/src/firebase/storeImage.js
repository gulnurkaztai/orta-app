// import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
// import { storage } from './firebase';
// import {v4 as uuidv4} from 'uuid'

// const uploadFile = (file) => {
//     return new Promise(async (resolve, reject) => {
//         const fileName = `${uuidv4()}`
//       const storageRef = ref(storage, fileName);
//       try {
//         await uploadBytesResumable(storageRef, file);
//         const url = await getDownloadURL(storageRef);
//         resolve(url);
//       } catch (error) {
//         reject(error);
//       }
//     });
//   };
  
//   export default uploadFile;