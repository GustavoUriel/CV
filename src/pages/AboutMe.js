import "bootstrap/dist/css/bootstrap.min.css";
import "css/AboutMe.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Accordion, Button } from "react-bootstrap";

const accordionData = [ 
    { id: "1", style:"titulo", title: "Education", children: [
        { id: "1A", style:"estudio", title: "Machine Learning", children: 
            [ { id: "1AA", style:"estudio_sub", title: "2020 - Stanford University" }]},
        { id: "1B", style:"estudio", title: "Full-Stack Web Development", children: [
            { id: "1BA", style:"estudio_sub", title: "2020 - Honk Kong Univ. of Science and Technology" }, 
            { id: "1BB", style:"estudio_sub", title: "Development of a website to give personalized financial advices to registered users." }] },
        { id: "1C", style:"estudio", title: "Data Science", children: [ 
            { id: "1CA", style:"estudio_sub", title: "2021 - IBM" }]},
        { id: "1D", style:"estudio", title: "Workshop Windows Server 2012 y Migrations ", children:	[
            { id: "1DA", style:"estudio_sub", title: "2010 - ReadyMind" }]},
        { id: "1E", style:"estudio", title: "System Engineering", children: [
            { id: "1EA", style:"estudio_sub", title: "2002 - State Tech University" }]},
        { id: "1F", style:"estudio", title: "Network Administrator", children: [
            { id: "1FA", style:"estudio_sub", title: "2001 - CISCO C.C.N.A." }]},
        { id: "1G", style:"estudio", title: "Electronics Technician", children: [
            { id: "1GA", style:"estudio_sub", title: "U.N.L - E.I.S." }]},
        ] }, 
    { id: "2", style:"titulo", title: "Languages", children: [
        { id: "2A", style:"estudio",title: "Spanish", children:  [{ id: "2AA", style:"estudio_sub", title: "Mother tongue" }]},
        { id: "2B", style:"estudio",title: "English", children:  [{ id: "2BA", style:"estudio_sub", title: "Fluent oral and writteh" }] }, 
        { id: "2C", style:"estudio",title: "Hebrew ", children:  [{ id: "2CA", style:"estudio_sub", title: "Basic" }]},
        ] }, 
    { id: "3", style:"titulo", title: "Experience", children: [
        { id: "3A", style:"estudio", title: "2018 - 2022 Rabinate of Argentina, Gabriel Davidovich. AMIA.", children: [
            { id: "3AA", style:"estudio_sub", title: "Leading in the administration of the Argentinian Rabbinate." },
            { id: "3AB", style:"estudio_sub", title: "Coded software to automatically generate complex legal documents in Spanish, Hebrew, and English." },
            { id: "3AC", style:"estudio_sub", title: "Public person assistant for the Rabbi." },
            { id: "3AD", style:"estudio_sub", title: "Ref.: Rabbi Gabriel Davidovich. (Ask for contact information)" }]},
        { id: "3B", style:"estudio", title: "2007 - 2018. Technological leader on N.G.O. Sucath David", children: [
            { id: "3BA", style:"estudio_sub", title: "Windows Server" },
            { id: "3BB", style:"estudio_sub", title: "IP lines" },
            { id: "3BC", style:"estudio_sub", title: "MS For Education" },
            { id: "3BD", style:"estudio_sub", title: "Mobile profiles" },
            { id: "3BE", style:"estudio_sub", title: "Biometrical control" },
            { id: "3BF", style:"estudio_sub", title: "Wireless links to rural locations" },
            { id: "3BG", style:"estudio_sub", title: "Ref.: Rabbi Abraham Serruya (Ask for contact information)" }]},
        ] }, 
    { id: "4", style:"titulo", title: "Honors Recieved", children: [
        { id: "4A", style:"estudio", title: "Titular Member of the Jury of Teacher Contest"},
        { id: "4B", style:"estudio", title: "To Chair Advanced Electronics"},
        { id: "4C", style:"estudio", title: "For last year all divisions of Electro-Mechanical certification"}
        ] }, 
    
    { id: "5",  style:"titulo",title: "Other Experiences", children: [
        { id: "5A", style:"otrasexperiencias", title: "Statewide coordinator for a payphone maintenance company"},
        { id: "5B", style:"otrasexperiencias", title: "Statewide coordinator for a semipublic phone maintenance company"},
        { id: "5B", style:"otrasexperiencias", title: "Statewide coordinator for a wireless rural phone maintenance company"},
        { id: "5B", style:"otrasexperiencias", title: "Desing and implementation of IP Wireless interurban networks"},
        { id: "5B", style:"otrasexperiencias", title: "Regional coordinator for a Head and neck surgeries prothesys sales"},
        { id: "5B", style:"otrasexperiencias", title: "FreeNAS, PF Sense server installation and maintenance"}
        ] },
    ];
    
const SubLevelComp = ({ item, renderNestedLevels }) => {
  const [selected, setselected] = React.useState("");

  const toggle = () => {
    setselected(selected === "" ? "active" : "");
  };

  const hasChidlren = (item) => {
    return Array.isArray(item.children) && item.children.length > 0;
  };

  return (
    <div>
      <p className={item.style} onClick={() => toggle()}
        style={{ cursor: hasChidlren(item) ? "pointer" : "" }}
      >
        {item.title}{" "}
        {hasChidlren(item) && <span>{selected === "active" ? "  " : " "}</span>}
      </p>
      {selected && (
        <div style={{ marginLeft: "20px" }}>
          {hasChidlren(item) && renderNestedLevels(item.children)}
        </div>
      )}
    </div>
  );
};

function Accordion2() {
  const renderNestedLevels = (data) => {
    return data.map((item, itemIndex) => (
      <SubLevelComp item={item} renderNestedLevels={renderNestedLevels} key={itemIndex}/>
    ));
  };

  return renderNestedLevels(accordionData);
}















export default function AboutMe() {

  return (

    <div>
        <div className="nombre col-12">
            Gustavo Uriel Levcovich
        </div>
        <div className="col-12">
        <Card.Body>
          <blockquote className="blockquote">
          <p className="mb-0">
              Successful people are always looking for opportunities to help
              others
            </p>
            <p className="mb-0">
              Unsuccessful people are always asking, "What's in it for
              me?
            </p>
            <footer className="blockquote-footer">
              Brian Tracy,
              <cite title="Source Title">Author and motivational speaker</cite>
            </footer>
          </blockquote>
        </Card.Body>

      </div>
      <div className="col-12">

                <Accordion2 />

</div>
    </div>
  );
}
