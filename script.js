var responseElem = document.getElementById("displayData");


var url;


function get() {
   
  var xhr = new XMLHttpRequest();
  url = "https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09"
  xhr.open("GET", url, true);
  xhr.onreadystatechange = callback;
  xhr.send();

  function callback() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      for(var i=0;i<response.length;i++)
      {
        
     var item = document.createElement('li');
     var info = document.createElement('div');
     info.setAttribute('class','info');
     item.appendChild(info);
     var name = document.createElement('p');
     name.setAttribute('class','name');
     var username = document.createElement('p');
     username.setAttribute('class','username');
     var email = document.createElement('p');
     email.setAttribute('class','email');
     var companyName = document.createElement('p');
     companyName.setAttribute('class','companyName');
     name.innerHTML = "Name : "+response[i].name;
     username.innerHTML = "Username : "+response[i].username;
     email.innerHTML = "Email : "+response[i].email;
     companyName.innerHTML = "Company Name : s "+response[i].company.name;
     info.appendChild(name);
     info.appendChild(username);
     info.appendChild(email);
     info.appendChild(companyName);
    
     console.log(item);
     document.getElementById('displayData').appendChild(item);
    
      }
      
      
    //   console.log(persons);
    //   responseElem.innerHTML = JSON.stringify(persons, null, 2);
    // responseElem.innerHTML = persons;
    } else {
      console.log(xhr.statusText);
      responseElem.innerHTML = xhr.statusText;
    }
  }
}
