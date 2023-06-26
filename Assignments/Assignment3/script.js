const date = document.getElementById("date");
const day = document.getElementById("day");
const my = document.getElementById("my");
const places = document.getElementById("places");
const container2 = document.getElementById("container2");

const d = new Date();
date.innerText = d.getDate();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
day.innerText = days[d.getDay()];

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
my.innerText = `${month[d.getMonth()]}, ${d.getFullYear()}`;

const getCityLists = () => {
  let data = {};
  const parentDiv = document.createElement("div");
  parentDiv.setAttribute("id", "placesDropdown");
  fetch(
    "https://raw.githubusercontent.com/Dipen-Dedania/static-data/main/india-popular-city.json"
  )
    .then((res) => {
      res.json().then((d) => {
        data = d;
        data.city.forEach((city) => {
          const childDiv = document.createElement("div");
          childDiv.setAttribute("class", "placeName");
          childDiv.innerText = city.name;
          parentDiv.appendChild(childDiv);
        });
        places.appendChild(parentDiv);
        parentDiv.classList.add("dropdowncontent");
        parentDiv.classList.add("dropdownScroller");
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

getCityLists();

const myfunc = () => {
  const placesDropdown = document.getElementById("placesDropdown");
  placesDropdown.classList.toggle("show");
};

function myfunc1() {
  const mydropdown = document.getElementById("mydropdown");
  mydropdown.classList.toggle("show");
}

const fetchVisitingPlaces = () => {
  fetch(
    "https://raw.githubusercontent.com/Dipen-Dedania/static-data/main/make-your-trip-package.json"
  )
    .then((res) => {
      res.json().then((data) => {
        (data || []).forEach((ele) => {
          // console.log(item.cityName);
          const div = document.createElement("div");
          div.classList.add("card");
          const p1 = document.createElement("p");
          p1.setAttribute("id", "cityname");
          p1.innerText = ele.cityName;
          div.appendChild(p1);
          const p2 = document.createElement("p");
          p2.setAttribute("id", "tourdate");
          p2.innerText = ele.tourDate;
          div.appendChild(p2);
          const p3 = document.createElement("p");
          p3.setAttribute("id", "category");
          p3.innerText = ele.category;
          div.appendChild(p3);
          const p4 = document.createElement("p");
          p4.setAttribute("id", "avgtemp");
          p4.innerText = "Average Temperature";
          div.appendChild(p4);
          const p5 = document.createElement("p");
          p5.setAttribute("id", "intemp");
          p5.innerHTML = `+${ele.temp}&#176;C`;
          div.appendChild(p5);
          const img = document.createElement("img");
          img.setAttribute("src", ele.cityImg);
          div.appendChild(img);
          const p6 = document.createElement("p");
          p6.setAttribute("id", "price");
          p6.innerText = "Total Price:";
          div.appendChild(p6);
          const div1 = document.createElement("div");
          div1.setAttribute("id", "flexs");
          const p7 = document.createElement("p");
          p7.setAttribute("id", "inprice");
          p7.innerText = ele.price;
          div1.appendChild(p7);
          const btn = document.createElement("button");
          btn.setAttribute("id", "explore");
          btn.innerText = "Explore";
          div1.appendChild(btn);
          div.appendChild(div1);
          container2.appendChild(div);
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

fetchVisitingPlaces();

const fetchCityDetail = async (cityName) => {
  const res = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${cityName}.json?access_token=pk.eyJ1Ijoic2h1YmhhbWhpcmFuaTQ1IiwiYSI6ImNreTN3OHBiaTA2OXoyd3E5YjJ2b2xicWkifQ.hQfD_1Mmlpta37azNXVyvQ`
  );
  const data = await res.json();

  const longitude = data.features[0].center[0];
  const latitude = data.features[0].center[1];

  const res1 = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&units=metric&appid=d57f8c3baf6bb12c1c6f23e9e1315929`
  );
  const data1 = await res1.json();

  document.getElementById("temp").innerHTML = `${data1.current.temp}&#176;`;
  document.getElementById("city").innerText = cityName;

  const tempstatus = data1.current.weather[0].main;
  const condition = document.getElementById("status");

  if (tempstatus == "Sunny") {
    condition.innerHTML =
      "<i class='fas fa-sun fa-2x' style='color: #eccc68'></i>";
  } else if (tempstatus == "Clouds") {
    condition.innerHTML =
      "<i class='fas fa-cloud fa-2x' style='color: #dfe4ea'></i>";
  } else if (tempstatus == "Rain") {
    condition.innerHTML =
      "<i class='fas fa-rain fa-2x' style='color:#a4b0be'></i>";
  } else {
    condition.innerHTML =
      "<i class='fas fa-sun fa-2x' style='color:#eccc68'></i>";
  }
};

window.onclick = async (event) => {
  if (event?.target?.classList && event.target.classList == "placeName") {
    await fetchCityDetail(event.target.innerText);
    if (event.target.parentElement.classList.contains("show") == true) {
      event.target.parentElement.classList.remove("show");
    }
  }
  if (!event.target.matches(".dropbtn")) {
    const dr = document.getElementsByClassName("dropdowncontent");
    const dr1 = document.getElementsByClassName("dropdowncontent1");
    for (let i = 0; i < dr.length; i++) {
      if (dr[i].classList.contains("show")) {
        dr[i].classList.remove("show");
      }
    }
    for (let i = 0; i < dr1.length; i++) {
      if (dr1[i].classList.contains("show")) {
        dr1[i].classList.remove("show");
      }
    }
  }
};
