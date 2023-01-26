import React from "react";
import "./Services.css";
import { services } from "../data";

const Services = () => {
  return (
    <div className="section">
      <div className="container mx-auto">
        <h2 className="title text-center">Our services</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 place-content-center gap-3 mt-10">
          {/* card1 */}
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="card w-auto bg-base-100 hover:border-blue-700 hover:border-2 shadow-xl rounded-none"
              >
                <div className="card-body">
                  <img
                    src={service.image.type}
                    alt=""
                    className="w-28 mx-auto"
                  />
                  <h2 className="card-title justify-center">{service.name}</h2>
                  <p className="text-center">{service.details}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Services;
