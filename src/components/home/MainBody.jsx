import React from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";
import Waveform from "./Waveform";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <Waveform/>
        <div id="stars"></div>
        <Container className="text-center">
          <h1 style={{zIndex:100,position:"relative"}} ref={ref} className="display-1">
            {title}
          </h1>
          <Typist>
            <div style={{zIndex:100,position:"relative"}}  className="lead typist">
              {message}
            </div>
          </Typist>
          <div  style={{zIndex:100,position:"relative"}}  className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
              { icon.image !== "fa-building-columns" ? <i className={`fab ${icon.image}  fa-3x socialicons`}/> : <i className={`fa ${icon.image}  fa-3x socialicons`} />}  
              </a>
            ))}
          </div>
          <a
            className="btn btn-outline-light btn-lg "
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
            style={{zIndex:100,position:"relative"}}
          >
            More about me
          </a>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
