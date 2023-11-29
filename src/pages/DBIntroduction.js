import "bootstrap/dist/css/bootstrap.min.css";
import "css/DBIntroduction.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Accordion, Button } from "react-bootstrap";
import NavBarDB from "components/NavBarDB";
import { Initialize, useServerSide, getFullData,GenerateNewData } from 'components/logical/ServerSide';
console.log(getFullData())

export default function DBIntroduction() { 
let tempBase=[]
tempBase = getFullData()
return (
<div class="main">
<NavBarDB />



descripcion de lo que pasa con los botones de la izquierda y lo que hace todo

</div>
)}