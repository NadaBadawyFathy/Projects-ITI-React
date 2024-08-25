import React from "react";

function BaymentForm() {
  return (
    <div className="container">
      <form>
        <h4>Payment Methods</h4>
        <div className="radio">
          <div>
            <input type="radio" id="e" name="pay" />
            <label className="mx-2" for="e" name="pay">
              Debit or credit card
            </label>
          </div>
          <div>
            <input type="radio" id="r" name="pay" />
            <label className="mx-2" for="r" name="pay">
              payPal
            </label>
          </div>
        </div>
        <div className="row">
            <div className="col-6">
            <label>First Name</label>
            <input type="text"/>
            </div>
            <div className="col-6">
            <label>Last Name</label>
            <input type="text"/>
            </div>
        </div>
      </form>
    </div>
  );
}

export default BaymentForm;
