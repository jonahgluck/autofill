var url = window.location.href;
let profile = {
  name: {
    firstName: "first",
    lastName: "last",
  },
  contact: {
    email: "email",
    tel: "tel",
  },
  address: {
    street: "123 Gilroy St",
    apt: "",
    zip: "12345",
    city: "city",
    state: "AL",
    country: "USA",
    countryTypedOut: "United States",
  },
  payment: {
    cardNum: "1234123412341234",
    expMonth: "01",
    expYear: "2030",
    cvv: "123",
  },
};

function fillInSupreme() {
  document.getElementById(
    "order_billing_name"
  ).value = `${profile.name.firstName} ${profile.name.lastName}`;
  document.getElementById("order_email").value = profile.contact.email;
  document.getElementById("order_tel").value = profile.contact.tel;
  document.getElementById("bo").value = profile.address.street;
  document.getElementById("oba3").value = profile.address.apt;
  document.getElementById("order_billing_zip").value = profile.address.zip;
  document.getElementById("order_billing_city").value = profile.address.city;
  document.getElementById("order_billing_state").value = profile.address.state;
  document.getElementById("order_billing_country").value =
    profile.address.country;
  document.getElementById("rnsnckrn").value = profile.payment.cardNum;
  document.getElementById("credit_card_month").value = profile.payment.expMonth;
  document.getElementById("credit_card_year").value = profile.payment.expYear;
  document.getElementById("orcer").value = profile.payment.cvv;

  //click check for terms & conditions
  document.getElementsByClassName("iCheck-helper")[1].click();
  //click process payment
  document.getElementsByName("commit")[0].click();
}

async function fillInShopify() {
  document.getElementById("checkout_email").value = profile.contact.email;
  document.getElementById("checkout_shipping_address_first_name").value =
    profile.name.firstName;
  document.getElementById("checkout_shipping_address_last_name").value =
    profile.name.lastName;
  document.getElementById("checkout_shipping_address_address1").value =
    profile.address.street;
  document.getElementById("checkout_shipping_address_address2").value =
    profile.address.apt;
  document.getElementById("checkout_shipping_address_city").value =
    profile.address.city;
  //coutry must be typed out
  document.getElementById("checkout_shipping_address_country").value =
    profile.address.countryTypedOut;
  document.getElementById("checkout_shipping_address_province").value =
    profile.address.state;
  document.getElementById("checkout_shipping_address_zip").value =
    profile.address.zip;
  document.getElementById("checkout_shipping_address_phone").value =
    profile.contact.tel;
  //continue to shipping
  document.querySelector(".step__footer__continue-btn").click();
}

function clickButton() {
  //need delay
  try {
    setTimeout(() => {
      document.querySelector(".step__footer__continue-btn").click();
    }, 3000);
  } catch (err) {
    setTimeout(clickButton, 6000);
  }
}

function lastInfo() {
  //need delay
  try {
    setTimeout(() => {
      document.getElementById("number").value = profile.payment.cardNum;
      document.getElementById(
        "name"
      ).value = `${profile.name.firstName} ${profile.name.lastName}`;
      document.getElementById(
        "expiry"
      ).value = `${profile.payment.expMonth}/${profile.payment.expYear}`;
      document.getElementById("verification_value").value = profile.payment.cvv;
      document.querySelector(".step__footer__continue-btn").click();
    }, 2000);
  } catch (err) {
    setTimeout(lastInfo, 10000);
  }
}

window.onload = async function () {
  try {
    let value = await document.getElementById("order_billing_name");
    if (value == undefined) {
      fillInShopify();
      clickButton();
      lastInfo();
    } else {
      fillInSupreme();
    }
  } catch (err) {
    console.log(err);
  }
};
