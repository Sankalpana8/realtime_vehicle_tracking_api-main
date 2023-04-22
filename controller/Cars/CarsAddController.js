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
const collectionName  = "cars"


const addCar = async(req,res) =>  {
    const riderName =  req.query.riderName;
    const vehicleNo = req.query.vehicleNo;


    const data = {
        "riderName" : riderName,
        "vehicleNo" : vehicleNo,
    }

    await setDoc(doc(firestore,collectionName,vehicleNo),data)

    res.header("Access-Control-Allow-Origin", "*");
    res.send(JSON.stringify(data))

}

export default addCar

