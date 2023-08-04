add = document.getElementById("add");
add.addEventListener("click", addtolist);
showdata();

function addtolist() {
  title = document.getElementById("title").value;
  email = document.getElementById("email").value;
  contact = document.getElementById("contact").value;
  date = document.getElementById("date").value;
  desc = document.getElementById("desc").value;

  if (title === "" || email === "" || contact === "" || date === "" || desc === "") {
    alert("Please fill all text fields!")
  }
  else if (localStorage.getItem("ItemJSON") == null) {
    ItemJSONArray = [];
    ItemJSONArray.push([title, email, contact, date, desc])
    localStorage.setItem("ItemJSON", JSON.stringify(ItemJSONArray))
  } else {
    ItemJSONArrayStr = localStorage.getItem("ItemJSON")
    ItemJSONArray = JSON.parse(ItemJSONArrayStr)
    ItemJSONArray.push([title, email, contact, date, desc])
    localStorage.setItem("ItemJSON", JSON.stringify(ItemJSONArray))
  }
  showdata();
}

function deleted(item) {
  ItemJSONArrayStr = localStorage.getItem("ItemJSON")
  ItemJSONArray = JSON.parse(ItemJSONArrayStr)
  ItemJSONArray.splice(item, 1)
  localStorage.setItem("ItemJSON", JSON.stringify(ItemJSONArray))
  showdata();
}

function showdata() {

  if (localStorage.getItem("ItemJSON") == null) {
    ItemJSONArray = [];
    localStorage.setItem("ItemJSON", JSON.stringify(ItemJSONArray))
  } else {
    ItemJSONArrayStr = localStorage.getItem("ItemJSON")
    ItemJSONArray = JSON.parse(ItemJSONArrayStr)
    localStorage.setItem("ItemJSON", JSON.stringify(ItemJSONArray))
  }

  TBody = document.getElementById("tableBody");
  Str = "";
  ItemJSONArray.forEach((element, index) => {
    Str += `
    <tr>
              <td class="tg-0lax">${index + 1}</td>
              <td class="tg-0lax">${element[0]}</td>
              <td class="tg-0lax">${element[1]}</td>
              <td class="tg-0lax">${element[2]}</td>
              <td class="tg-0lax">${element[3]}</td>
              <td class="tg-0lax">${element[4]}</td>
              <td class="tg-0lax"><button class="btn btn-danger" type="button" onclick="deleted(${index})">Delete</button></td>

            </tr>
    `
  });
  TBody.innerHTML = Str;

  showdata();
}

function clearAll() {
  if (confirm("Are you sure you want to delete?")) { 
  localStorage.clear(); 
  showdata(); }
}