import "bootstrap/dist/css/bootstrap.min.css";
import "css/DBIACharts.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Accordion, Button } from "react-bootstrap";
import NavBarDB from "components/NavBarDB";
import { Initialize, useServerSide, getFullData,GenerateNewData } from 'components/logical/ServerSide';


export default function IACharts() { return (
<div class="main">
<NavBarDB />

DBIACharts a ver que tan bien estamos

</div>
)}