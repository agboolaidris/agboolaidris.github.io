import React from "react";
import Html from "../../imgs/icon/html.svg";
import Css from "../../imgs/icon/css.svg";
import Tailwindcss from "../../imgs/icon/tailwindcss.svg";
import Sass from "../../imgs/icon/sass.svg";
import Javascript from "../../imgs/icon/javascript.svg";
import Reactjs from "../../imgs/icon/reactjs.svg";
import Nextjs from "../../imgs/icon/nextjs.svg";
import Typescript from "../../imgs/icon/typescript.svg";
import Nodejs from "../../imgs/icon/nodejs.svg";
import Expressjs from "../../imgs/icon/expressjs.svg";
import Mongodb from "../../imgs/icon/mongodb.svg";
import Mysql from "../../imgs/icon/mysql.svg";

function Skills() {
  return (
    <div className="skill">
      <div className="skill-img-wrapper">
        <div className="skill-imgBox">
          <img
            src="https://scontent.flos5-1.fna.fbcdn.net/v/t1.6435-9/81602663_2615294041920111_14672351312478208_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHv8RXM5de3yZOCFD3yKsfZoO1auc_3yuGg7Vq5z_fK4Z9W_iL6_gxGhlIXh4J5DRrXrBuGRRoxhYXk2dSAuPe8&_nc_ohc=7dq-1xncwEUAX8fiAHu&_nc_ht=scontent.flos5-1.fna&oh=59541d835f4fa671d3d51c8e5d7c0724&oe=60C9133F"
            alt=""
          />
        </div>
      </div>
      <div className="skill-list">
        <h2>Why Work With Me</h2>
        <div className="soft-skill">
          <h3>SOFT SKILLS</h3>
          <p>
            I am a great communicator and love to invest the necessary time to
            understand the customer's problem very well
          </p>
        </div>
        <div className="development-skill">
          <h3>DEVELOPMENT SKILLS</h3>
          <p>
            I am familiar and work on a daily basis with HTML, CSS, JavaScript,
            Bootstrap and other modern frameworks
          </p>

          <div>
            <span className="html">
              <img src={Html} />
            </span>
            <span className="html">
              <img src={Css} />
            </span>
            <span>
              <img src={Sass} />
            </span>
            <span>
              <img src={Tailwindcss} />
            </span>
            <span>
              <img src={Javascript} />
            </span>
            <span>
              <img src={Reactjs} />
            </span>
            <span>
              <img src={Typescript} />
            </span>
            <span>
              <img src={Nextjs} className="next" />
            </span>
            <span>
              <img src={Nodejs} />
            </span>
            <span>
              <img src={Expressjs} />
            </span>
            <span>
              <img src={Mongodb} />
            </span>
            <span>
              <img src={Mysql} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
