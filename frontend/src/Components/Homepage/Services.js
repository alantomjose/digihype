import React, { useEffect } from "react";
import CardService from "./CardService";
import "../../css/animation.css";
import ScrollMagic from "scrollmagic";
import Pr from "../../assets/img/publicrelations.png";
import Dr from "../../assets/img/digitalmark.png";
import Soc from "../../assets/img/social.png";
import In from "../../assets/img/influencer.png";
import Se from "../../assets/img/seo.png";
import Tm from "../../assets/img/talentman.png";

export default function Services() {
  useEffect(() => {
    // init controller
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerElement: "#services",
      // duration:100,
      // offset: -25,
    })
      .setClassToggle("#serviceanim", "opacity-100")
      // .setClassToggle("#cardservice", "opacity-100")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#services",
      // duration:100,
      // offset: -10,
    })
      // .setClassToggle("#serviceanim", "opacity-100")
      .setClassToggle("#cardservice", "opacity-100")
      .addTo(controller);
  }, []);
  return (
    <div
      id="services"
      className="w-screen bg-fixed bg-center bg-cover overflow-y-auto "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1565530995968-2e619c04a8a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60')",
      }}
    >
      <div className=" container mx-auto pt-10    ">
        <h2
          className="sm:text-5xl text-3xl text-gray-200 text-center font-heading opacity-0 slowanimate"
          id="serviceanim"
        >
          What We Do
        </h2>
        <div className="">
          <div
            id="cardservice"
            className="flex justify-around opacity-0 slowanimate flex-row flex-wrap h-full sm:mx-16 md:mx-2 lg:mx-16 sm:py-10 py-2"
          >
            <CardService
              num="1"
              title="Public Relations "
              desc="Need media presence for your brand? We bring PR excellence to you."
              icn={Pr}
            />
            <CardService
              num="2"
              title="Digital Marketing "
              desc="Integrated Marketing Communications across all Digital platforms."
              icn={Dr}
            />
            <CardService
              num="3"
              title="Social Media Management "
              desc="Do you feel that your business is not reaching the intended audience?           
              Well now it will, leave It to us. We will help you break the internet."
              icn={Soc}
            />

            <CardService
              num="4"
              title="Influencer Marketing  "
              desc="Inspire, influence and drive the message."
              icn={In}
            />
            <CardService
              num="5"
              title="SEO"
              desc="Authenticity is our virtue and we aim to provide you with quality content."
              icn={Se}
            />
            <CardService
              num="6"
              title="Talent Management"
              desc=" At Hype Digital, you will find a heartfelt piece of us in everything that we deliver. As someone rightly said that talent hits a target no one else can hit."
              icn={Tm}
            />
          </div>
        </div>
      </div>
      <div className="sm:block h-10 xl:h-16"></div>
    </div>
  );
}
