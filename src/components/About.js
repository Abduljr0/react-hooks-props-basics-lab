import React from "react";
import user from "../data/user";
import Links from "./Links";
const bio =   "../data/user";
function About({props}) {
  return (
    <div id="about">
      <h2>About Me</h2>
       { bio ?<p >{props.bio}</p>:null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links props={user.links} />
    </div>
  );
}

export default About;
