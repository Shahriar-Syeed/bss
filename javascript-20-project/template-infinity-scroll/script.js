// Unsplash API
let count =10;
const apiKey ='-NsA-2nzHBpzHTCbA01EBxFLQRKVAG_jWgLMQdgHRcU';
const apiUrl =`https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhoto(){
  try{
    const response = await fetch(apiUrl);
    const data =await response.json();
    console.log(data);
  } catch (error){
    // catch error here
  }
};

// onload
getPhoto();