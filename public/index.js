function toggleIcon() {
    let toggleElement = document.getElementById("menux");
    let isToggle = localStorage.getItem("toggle");
    isToggle = JSON.parse(isToggle);
    if (isToggle == true) {
      toggleElement.className = "navbar-toggler-icon";
      isToggle = !isToggle;
      localStorage.setItem("toggle", JSON.stringify(isToggle));
    } else {
      toggleElement.className = "cross-icon";
      localStorage.setItem("toggle", JSON.stringify(true));
    }
  }