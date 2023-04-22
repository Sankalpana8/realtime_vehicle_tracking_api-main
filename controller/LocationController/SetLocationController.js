import express from "express";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {setDoc,getFirestore,doc} from "firebase/firestore/lite"
import dotenv from "dotenv"

const firebaseConfig = {
  apiKey: "AIzaSyBMQTDFzZ0eKlR9ZS9xMnC13wLxr1hviTY",
  authDomain: "ipccw2-e8950.firebaseapp.com",
  projectId: "ipccw2-e8950",
  storageBucket: "ipccw2-e8950.appspot.com",
  messagingSenderId: "491967830403",
  appId: "1:491967830403:web:9bf860df56ad2cf1f03eb6",
  measurementId: "G-7SH6SNS51Y"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp)
const collectionName  = "sensor_data"


const setLocation = async(req,res) =>  {
    const trackerId =  req.query.trackerId;
    const longitude = req.query.longitude;
    const latitude = req.query.latitude;

    const data = {
        "trackerId" : trackerId,
        "longitude" : longitude,
        "latitude" : latitude
    }

    await setDoc(doc(firestore,collectionName,trackerId),data)


    res.send(JSON.stringify(data))

}

export default setLocation

