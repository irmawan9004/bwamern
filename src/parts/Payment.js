import React from "react";
import { Fade } from "react-reveal";
import InputFile from "elements/Form/InputFile";
import InputText from "elements/Form/InputText";
import logoBca from "assets/image/logo-bca.jpg";
import logoMandiri from "assets/image/logo-mandiri.jpg";

export default function Payment(props) {
  const { data, ItemDetails, checkout } = props;

  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className="mb-4">Transfer Pembayaran</p>
              <p>Tax: {tax}%</p>
              <p>Sub Total: ${subTotal} USD</p>
              <p>Total: ${grandTotal} USD</p>
              <div className="row mt-4">
                <div className="col-3 text-right">
                  <img src={logoBca} alt="bank central asia" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Bank Central Asia</dd>
                    <dd>2222 2222 2222 2222</dd>
                    <dd>M.Irmawan</dd>
                  </dl>
                </div>
              </div>
              <div className="row">
                <div className="col-3 text-right">
                  <img src={logoMandiri} alt="bank central asia" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd>2111 2111 2111 2112</dd>
                    <dd>M.Irmawan</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <InputFile
                accept="image/*"
                id="proofPayment"
                name="proofPayment"
                value={data.proofPayment}
                onChange={props.onChange}
              />
              <label htmlFor="bankName">Nama Bank</label>
              <InputText
                id="bankName"
                name="bankName"
                value={data.bankName}
                onChange={props.onChange}
              />
              <label htmlFor="bankHolder">Nama Pemilik</label>
              <InputText
                id="bankHolder"
                name="bankHolder"
                value={data.bankHolder}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
