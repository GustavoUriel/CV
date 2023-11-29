import React, { useEffect, useState, useContext } from "react";
let dataBase = []

export const LocalContext = React.createContext();


export const  Initialize = (props) => {
dataBase = []
  for (let i = 0; i < 100; i++) {
    const element = {
      id: i,
      Date: randomDate(),
      Color: randomColor(),
      Quantity: randomService(),
      Intensity: randomDate(),
      City: randomCity(),
      State:randomState(),
      Country: randomCountry()
    };
    dataBase.push(element)
    console.log(i)
    console.log(element)
    console.log(dataBase)

}
return dataBase};

export const useServerSide = (props) => {
  return  };

  export const getFullData = (props) => {
  return dataBase };
  
export const GenerateNewData = (props) => {
  return Initialize
};


  const howManyOfThisService = (props) => {
      return dataBase.filter((i) => i.Date == props);
  };

  // The composition of the CONTEXT
  const value = {
    Initialize,
    getFullData,
    GenerateNewData,
  };

      function randomDate() {
      let rndIndex = parseInt(Math.random() );
      return rndIndex;   }

      function randomColor() {
      let rndIndex = parseInt(Math.random() );
      return rndIndex;   }

      function randomService() {
      let rndIndex = parseInt(Math.random() );
      return rndIndex;   }

      function randomCity() {
      let rndIndex = parseInt(Math.random() );
      return rndIndex;   }

      function randomState() {
      let rndIndex = parseInt(Math.random() );
      return rndIndex;   }

      function randomCountry() {
      let rndIndex = parseInt(Math.random() );
      return rndIndex;   }
        
