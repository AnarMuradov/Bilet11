import React, { useEffect, useState } from "react";
import './style.scss'
const OurBestServices = () => {
  const [api, setApi] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);

  return (
    <section className="OurBestServices">
      <div className="OurBestServices__container">
       <div className="OurBestServices__container__column">
       <div className="OurBestServices__container__column__title">
          <div className="OurBestServices__container__column__title__head">
            <div className="OurBestServices__container__column__title__head__line"></div>
            <div className="OurBestServices__container__column__title__head__text">
              OUR TOP SERVICES
            </div>
          </div>
          <div className="OurBestServices__container__column__title__name">
            Our Best Services
          </div>
        </div>
        <div className="OurBestServices__container__column__cardBox">
          {api.map((x) => {
            return (
              <div
                className="OurBestServices__container__column__cardBox__card"
                key={x._id}
              >
                <div className="OurBestServices__container__column__cardBox__card__icon">
                  <i className={x.icon}></i>
                </div>
                <div className="OurBestServices__container__column__cardBox__card__content">
                    <div className="OurBestServices__container__column__cardBox__card__content__title">{x.title}</div>
                    <div className="OurBestServices__container__column__cardBox__card__content__text">{x.text}</div>
                </div>
              </div>
            );
          })}
        </div>
       </div>
      </div>
    </section>
  );
};

export default OurBestServices;
