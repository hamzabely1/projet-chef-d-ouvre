import React from 'react'

const Paiment = () => {
  return (
    <div className='container-sm'>


<form >
   <div class="row mx-0 text-center">
      <div class="col-4 px-0">
         <div class="card card-offer">
            <div class="card-header">
               <label for="amount0"><span data-display="offer-name">offer</span></label>
            </div>
            <div class="card-body">
               <p class="text-price"><span data-display="amount"></span><span data-display="currency-symbol">-</span></p>
               <input type="radio" name="offer" id="amount0" data-select="amount" required />
            </div>
         </div>
      </div>
      <div class="col-4 px-0">
         <div class="card card-offer">
            <div class="card-header">
               <label for="amount1"><span data-display="offer-name">offer</span></label>
            </div>
            <div class="card-body">
               <p class="text-price"><span data-display="amount"></span><span data-display="currency-symbol">-</span></p>
               <input type="radio" name="offer" id="amount1" data-select="amount" />
            </div>
         </div>
      </div>
      <div class="col-4 px-0">
         <div class="card card-offer">
            <div class="card-header">
               <label for="amount2"><span data-display="offer-name">offer</span></label>
            </div>
            <div class="card-body">
               <p class="text-price"><span data-display="amount"></span><span data-display="currency-symbol">-</span></p>
               <input type="radio" name="offer" id="amount2" data-select="amount" />
            </div>
         </div>
      </div>
   </div>
   <div data-centralpay="errors" class="custom-form"></div>
   <p data-form="main-description" class="sr-only">Card data</p>
   <div class="form-row mt-3" data-toggle="popover-example-data">
      <div class="form-group col-6">
         <div class="has-feedback input-group">
            <div class="input-group-prepend">
               <div class="input-group-text"><div class="ico ico-user"></div></div>
            </div>
            <input data-centralpay="firstName" type="text" name="order[firstName]" autocomplete="off"
                  data-form="card-user" class="form-control" placeholder="First name" required="required" />
         </div>
      </div>
      <div class="form-group col-6">
         <div class="has-feedback input-group">
            <div class="input-group-prepend">
               <div class="input-group-text"><div class="ico ico-user"></div></div>
            </div>
            <input data-centralpay="lastName" type="text" name="order[lastName]" autocomplete="off"
                  data-form="card-user" class="form-control" placeholder="Last name" required="required" />
         </div>
      </div>
   </div>
   <div data-form="card-validation">
      <div class="form-row">
         <div class="form-group col-12">
            <div class="has-feedback input-group">
               <div class="input-group-prepend">
                  <div class="input-group-text"><div class="ico ico-envelope"></div></div>
               </div>
               <input data-centralpay="card[holderEmail]" type="email" name="card[cardholderEmail]"
                     autocomplete="off" class="form-control" data-form="card-user"
                     placeholder="E-mail" required="required" />
            </div>
         </div>
      </div>
      <div class="form-row">
         <div class="col-12">
            <div data-form="remember-div" class="remember remember-option d-flex align-items-center mb-3">
               <span class="remember-checkbox form-check">
                  <input class="form-check-input" data-form="remember-select" id="remember" type="checkbox"
                        name="store-card"/>
                  <label class="form-check-label" for="remember">remember me</label>
               </span>
               <span class="card-stored">Use your card</span>
               <a class="help-icon" data-toggle="popover-info">
                  <img src="/v2/src/img/question-mark.png" alt=""/>
               </a>
               <div id="popover-card-info" class="d-none">
                  <span class="np-popover-style">Your card data is stored securely. <a href="#">More information</a></span>
               </div>
            </div>
         </div>
      </div>
      <div class="form-row d-none">
         <div class="form-group col-12">
            <select list="userCards" data-form="card-list" type="text" class="form-control input-large">
               <option> -- pay with a new credit card -- </option>
            </select>
         </div>
      </div>
      <div id="card-option" class="new-card-ok">
         <div class="form-row">
            <div class="form-group col-12 new-card">
               <div class="has-feedback input-group">
                  <div class="input-group-prepend">
                     <div class="input-group-text"><div class="ico ico-cb"></div></div>
                  </div>
                  <input data-centralpay="card[number]" type="tel" pattern="([0-9 ]{14,20})?" autocomplete="off"
                        class="form-control form-card-data form-card-number" placeholder="Credit card number"
                        maxlength="20" data-form="card-data" />
               </div>
            </div>
         </div>
         <div class="form-row align-items-center">
            <div class="form-group col-8 new-card">
               <div class="has-feedback input-group">
                  <div class="input-group-prepend">
                     <div class="input-group-text"><div class="ico ico-calendar"></div></div>
                  </div>
                  <input data-centralpay="card[expirationMonth]" type="tel" pattern="[0-9]{1,2}"
                        maxlength="2" autocomplete="off" class="form-control form-card-data" placeholder="MM"
                        data-form="card-data" />
                  <input data-centralpay="card[expirationYear]" type="tel" max="9999" inputmode="tel"
                        pattern="[0-9]{4}" autocomplete="off" class="form-control form-card-data"
                        data-form="card-data" placeholder="YYYY" />
               </div>
            </div>
            <div class="form-group col-8 stored-card use-cvv text-right">Select card and enter CVV</div>
            <div class="form-group col-4 use-cvv">
               <div class="has-feedback input-group">
                  <div class="input-group-prepend">
                     <div class="input-group-text"><div class="ico ico-lock"></div></div>
                  </div>
                  <input data-centralpay="card[cvc]" type="tel" pattern="[0-9]{3,4}" maxlength="4"
                        autocomplete="off" class="form-control form-card-data" placeholder="CVV2"
                        name="customerValidationValue" />
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="text-center mt-2">
      <button class="btn btn-cpay" type="submit" value="submit" data-form="submit" data-toggle="popover"
            data-placement="bottom" data-trigger="hover">
         <div class="np-button-content">
            <span data-display="submit-value">Pay</span>
            <div class="np-loader"></div>
         </div>
      </button>
   </div>
</form>








        
    </div>
  )
}

export default Paiment