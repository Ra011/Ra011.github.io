const toggleNav = () => {
  document.getElementById("nav-items").classList.toggle("hide-small");
};

const goToBookingsPage = () => {
  window.location.href = "bookings.html";
};

const goToFacebookPage = () => {
  window.location.href = "http://facebook.com";
};

const goToTwitterPage = () => {
  window.location.href = "http://twitter.com";
};

const goToInstaPage = () => {
  window.location.href = "http://instagram.com";
};




window.onload = () => {
  document.getElementById("hamburger").onclick = toggleNav;
  document.getElementById("button-book").onclick = goToBookingsPage;
  document.getElementById("facebook-logo").onclick = goToFacebookPage;
  document.getElementById("twitter-logo").onclick = goToTwitterPage;
  document.getElementById("insta-logo").onclick = goToInstaPage;
}
