function $q (el, a = false, af) {
  let qs = document.querySelector(el);
  if (a) {
    if (a == "click") {
      qs.addEventListener('click', function () {
        af(this);
      });
    }
    else if (a == "hide") {
      qs.style.display = "none";
    }
    else if (a == "html") {
      qs.innerHTML = af();
    }
    else if (a == "all") {
      return document.querySelectorAll(el);

    }
    else if (a == "html-add") {
      qs.innerHTML += af();
    }
  }
  else {
    return qs;
  }
}
