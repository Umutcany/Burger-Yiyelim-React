import React from "react";
import BannerYeni from "../assets/banneryeni.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerYeni})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          quod libero a inventore iure repellat, doloribus temporibus? Eveniet
          exercitationem ipsa sed tenetur cum optio, fugiat facere perspiciatis
          officiis adipisci culpa, expedita quo corporis. Quam, blanditiis
          ratione natus perspiciatis accusamus autem, consequatur in inventore
          ducimus voluptate magnam itaque facilis officiis ut labore cupiditate!
          Ipsa alias sunt dignissimos nulla voluptas nisi distinctio molestiae,
          natus, in adipisci voluptate ratione odit eum! Quisquam labore
          similique odio impedit modi numquam. Doloribus necessitatibus repellat
          ex odit iste, dolores dolore incidunt! Quo mollitia repellat odio
          quidem cumque, magnam ipsa esse magni soluta sunt possimus blanditiis,
          officia itaque velit ipsum. Exercitationem placeat esse inventore
          laboriosam mollitia cupiditate similique ratione. Similique, modi vero
          placeat nulla eveniet corporis iusto ratione, atque quam laudantium
          voluptate, eum harum quisquam! Modi, earum? Doloremque aperiam
          reiciendis quos ea, iste quis odit nobis cumque ab sunt ut porro
          laudantium vero quaerat reprehenderit nisi, culpa eaque fugiat omnis
        </p>
      </div>
    </div>
  );
}

export default About;
