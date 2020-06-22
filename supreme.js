const config = require("./config/config.json");

document.getElementById(
  "order_billing_name"
).value = `${config.profile.name.firstName} ${config.profile.name.lastName}`;
document.getElementById("order_email").value = config.profile.contact.email;
document.getElementById("order_tel").value = config.profile.contact.tel;
document.getElementById("bo").value = config.profile.address.street;
document.getElementById("oba3").value = config.profile.address.apt;
document.getElementById("order_billing_zip").value = config.profile.address.zip;
document.getElementById("order_billing_city").value =
  config.profile.address.city;
document.getElementById("order_billing_state").value =
  config.profile.address.state;
document.getElementById("order_billing_country").value =
  config.profile.address.country;
document.getElementById("rnsnckrn").value = config.profile.payment.cardNum;
document.getElementById("credit_card_month").value =
  config.profile.payment.expMonth;
document.getElementById("credit_card_year").value =
  config.profile.payment.expYear;
document.getElementById("orcer").value = config.profile.payment.cvv;

//click check for terms & conditions
document.getElementsByClassName("iCheck-helper")[1].click();
//click process payment
document.getElementsByName("commit")[0].click();
