var responseElem = document.getElementById("displayData");

var url;

function get() {
  var xhr = new XMLHttpRequest();
  url =
    "https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09";
  xhr.open("GET", url, true);
  xhr.onreadystatechange = callback;
  xhr.send();

  function callback() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      for (var i = 0; i < response.length; i++) {
        var item = document.createElement("li");
        var info = document.createElement("div");
        info.setAttribute("class", "info");
        item.appendChild(info);
        var name = document.createElement("p");
        name.setAttribute("class", "name");
        var username = document.createElement("p");
        username.setAttribute("class", "username");
        var email = document.createElement("p");
        email.setAttribute("class", "email");
        var companyName = document.createElement("p");
        companyName.setAttribute("class", "companyName");
        var phone = document.createElement("p");
        phone.setAttribute("class", "phone");
        var website = document.createElement("p");
        website.setAttribute("class", "website");

        var address = document.createElement("p");
        address.setAttribute("class", "address");

        name.innerHTML = "Name : " + response[i].name;
        username.innerHTML = "Username : " + response[i].username;
        email.innerHTML = "Email : " + response[i].email;
        companyName.innerHTML = "Company Name : " + response[i].company.name;
        phone.innerHTML = "Phone : " + response[i].phone;
        website.innerHTML = "Website : " + response[i].website;

        address.innerHTML =
          "Address : " +
          response[i].address.suite +
          "," +
          response[i].address.street +
          "," +
          response[i].address.city;

        info.appendChild(name);
        info.appendChild(username);
        info.appendChild(email);
        info.appendChild(companyName);
        info.appendChild(phone);
        info.appendChild(website);
        info.appendChild(address);

        console.log(item);
        document.getElementById("displayData").appendChild(item);
      }

     
    } else {
      console.log(xhr.statusText);
      responseElem.innerHTML = xhr.statusText;
    }
  }
}
