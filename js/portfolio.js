document.addEventListener("DOMContentLoaded", (event) => {
  const text = "Web Integrator";
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      document.getElementById("typed-text").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 300);
    }
  }

  typeWriter();
});
