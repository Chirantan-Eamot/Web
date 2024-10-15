import { listItems2 } from "@/data/features";
import React from "react";
import Image from "next/image";

export default function Features2() {
  return (
    <div className="wg-create-design style-1">
      <Image
        className="item1 block-star"
        src="/assets/images/home/dashb.png"
        width={100}
        height={100}
        alt="image"
      />
      <div className="item2 block-blur-1" />
      <div className="item3 block-blur-2" />
      <div className="item4 block-blur-3" />
      <div className="item5 block-blur-4" />
      <Image
        className="item6"
        src="/assets/images/item-background/dot.png"
        width={463}
        height={300}
        alt="image"
      />
      <div className="themesflat-container">
        <div className="row">
          <div className="col-lg-5 ">
            <div className="content">
              <div className="heading-section wow fadeInUp">
                <h6>Power Monitoring Solutions</h6>
                <div className="main-title">
                  <span className="animation-text">EMaaS at Work</span>
                </div>
              </div>
              <p className="">
              EAMOT’s monitoring solution has developed IoT monitoring solution designed to
revolutionize how you manage and safeguard your critical assets. With our
advanced technology and real-time insights, you can stay one step ahead, making
informed decisions and optimizing performance like never before.
              </p>
              <ul className="list-item">
                {listItems2.map((elm, i) => (
                  <li key={i}>
                    <i className="icon-check" />
                    {elm.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-7 ">
            <div className="image">
              <Image
                className="img-01"
                src="/assets/images/home/dashb.png"
                alt="image"
                width={640}
                height={540}
              />
              <Image
                className="img-02"
                src="/assets/images/home/dashanalytics.png"
                alt="image"
                width={345}
                height={345}
              />
              <Image
                className="img-03"
                src="/assets/images/item-background/dot.png"
                alt="image"
                width={463}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}