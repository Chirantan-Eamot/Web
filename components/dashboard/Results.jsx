import Counter from "@/components/common/Counter";
import React from "react";

export default function Result() {
  return (
    <div className="wg-result pt-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center wow fadeInUp">
              <div className="sub-title">
                Power Management With Data-Driven Intelligence
              </div>
              <div className="main-title">
               Your On-Demand Partner for
                <br /> Electro-Mechanical Solutions{" "}
                {/* <span className="animation-text"></span> */}
              </div>
            </div>
            <div className="counter text-center">
              <div className="number-counter">
                <Counter parentClass={"number"} max={29102} min={1684201} />
                <p>Sites Monitored</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
