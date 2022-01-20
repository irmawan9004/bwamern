import React, { Component } from "react";
import Header from "parts/Header";
import { Fade } from "react-reveal";
import Button from "elements/Button";
import Stepper from "elements/Stepper";
import Numbering from "elements/Stepper/Numbering";
import Controller from "elements/Stepper/Controller";
import Meta from "elements/Stepper/Meta";
import MainContent from "elements/Stepper/MainContent";
import BookingInformation from "parts/BookingInformation";
import Payment from "parts/Payment";
import Completed from "parts/Completed";
import { connect } from "react-redux";
import { submitBooking } from "store/actions/checkout";

import ItemDetails from "json/itemDetails.json";

class Checkout extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
  }
  _Submit = (nextSteps) => {
    const { data } = this.state;
    const { checkout } = this.props;
    const payload = new FormData();
    payload.append("firstName", data.firstName);
    payload.append("lastName", data.lastName);
    payload.append("email", data.email);
    payload.append("phoneNumber", data.phone);
    payload.append("itemId", checkout._id);
    payload.append("duration", checkout.duration);
    payload.append("bookingStartDate", checkout.date.startDate);
    payload.append("bookingEndDate", checkout.date.endDate);
    payload.append("accountHolder", data.bankHolder);
    payload.append("bankFrom", data.bankName);
    payload.append("image", data.proofPayment[0]);
    this.props.submitBooking(payload).then(() => {
      nextSteps();
    });
  };

  render() {
    const { data } = this.state;
    const { checkout, page } = this.props;

    if (!checkout)
      return (
        <div className="container">
          <div
            className="row align-items-center justify-content-center text-center"
            style={{ height: "100vh" }}
          >
            <div className="col-3">
              Pilih Kamar Dahulu
              <div>
                <Button
                  className="btn mt-5"
                  type="button"
                  onClick={() => this.props.history.goBack()}
                  isLight
                >
                  this.props.
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields below",
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            ItemDetails={page[checkout._id]}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the instruction below",
        content: (
          <Payment
            data={data}
            checkout={checkout}
            ItemDetails={page[checkout._id]}
            onChange={this.onChange}
          />
        ),
      },
      completed: {
        title: "Yay! Completed",
        description: null,
        content: <Completed />,
      },
    };
    return (
      <>
        <Header isCentered></Header>
        <Stepper steps={steps}>
          {(prevSteps, nextSteps, CurrentStep, steps) => (
            <>
              <Numbering
                data={steps}
                current={CurrentStep}
                style={{ marginBottom: 50 }}
              />
              <Meta data={steps} current={CurrentStep} />
              <MainContent data={steps} current={CurrentStep} />
              {CurrentStep === "bookingInformation" && (
                <Controller>
                  {data.firstName !== "" &&
                    data.lastName !== "" &&
                    data.email !== "2" &&
                    data.phone !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextSteps}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn"
                    type="link"
                    isBlock
                    isLight
                    href={`/properties/${ItemDetails._id}`}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}
              {CurrentStep === "payment" && (
                <Controller>
                  {data.proofPayment !== "" &&
                    data.bankName !== "" &&
                    data.bankHolder !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={() => this._Submit(nextSteps)}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn"
                    type="button"
                    isBlock
                    isLight
                    onClick={prevSteps}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}
              {CurrentStep === "completed" && (
                <Controller>
                  <Button
                    className="btn"
                    type="link"
                    isBlock
                    isPrimary
                    hasShadow
                    href=""
                  >
                    Back to Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
        ;
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  checkout: state.checkout,
  page: state.page,
});

export default connect(mapStateToProps, { submitBooking })(Checkout);
