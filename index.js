document.getElementById("order_billing_name").value = "First Last";
document.getElementById("order_email").value = "myemail@domain.com";
document.getElementById("order_tel").value = "1231231231";
document.getElementById("bo").value = "123 Gilroy St";
document.getElementById("oba3").value = "myemail@domain.com";
document.getElementById("order_billing_zip").value = "12345";
document.getElementById("order_billing_city").value = "New York City";
document.getElementById("order_billing_state").value = "NY";
document.getElementById("order_billing_country").value = "USA";
document.getElementById("rnsnckrn").value = "1234123412341234";
document.getElementById("credit_card_month").value = "01";
document.getElementById("orcer").value = "123";

//click check for terms & conditions
document.getElementsByClassName("iCheck-helper")[1].click();
//click process payment
document.getElementsByName("commit")[0].click();
