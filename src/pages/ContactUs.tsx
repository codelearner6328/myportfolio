import React from "react";
import { contactData } from "../DevData";
export default function ContactUs() {
  return (
    <section id="contact">
      <div className="contact container">
        <div>
          <h1 className="section-title">
            Contact <span>Info</span>
          </h1>
        </div>
        <div className="contact-items">
          {contactData.map((item, map) => {
            return (
              <div className="contact-item">
                <div className="icon">
                  <img src={item.img} alt="phone" />
                </div>
                <div className="contact-info">
                  <h1>{item.source}</h1>
                  <h2>{item.textOne}</h2>
                  {item.textTwo === "" ? null : <h2>{item.textTwo}</h2>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
