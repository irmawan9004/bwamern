import React from "react";
import Button from "elements/Button";
import IconText from "./IconText";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
            <IconText />
            <p className="brand-tagline">liburan skuy</p>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
            </ul>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/booking">
                  Start Booking a Room
                </Button>
              </li>
            </ul>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/usepayment">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/ourcarrer">
                  Our Carrers
                </Button>
              </li>
            </ul>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
            </ul>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:support@staycation.id"
                >
                  support@staycation.id
                </Button>
              </li>
            </ul>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="tel:+6282091022121">
                  0822091022121
                </Button>
              </li>
            </ul>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="">Staycation,Bogor,Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyright">
            Copyright 2021 - All right reserved - Staycation
          </div>
        </div>
      </div>
    </footer>
  );
}
