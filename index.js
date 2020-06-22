var url = window.location.href;
let profile = {
  name: {
    firstName: "first",
    lastName: "last",
  },
  contact: {
    email: "myemail@domain.com",
    tel: "123",
  },
  address: {
    street: "123 Gilroy St",
    apt: "",
    zip: "12345",
    city: "city",
    state: "NC",
    country: "USA",
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
  document.getElementById("order_billing_city").value = profile.address.state;
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

window.onload = function () {
  if (url == "https://www.supremenewyork.com/checkout") {
    fillInSupreme();
  }
};
