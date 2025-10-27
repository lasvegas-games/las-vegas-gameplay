const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popupContent");
    const mainContent = document.getElementById("mainContent");
    const whatsappLink = document.getElementById("whatsappLink");

    
    document.getElementById("btnSiEdad").addEventListener("click", () => {
      popupContent.innerHTML = `
        <h2>¿Quieres jugar ya?</h2>
        <button id="btnSiJugar">SI</button>
        <button id="btnNoJugar">NO</button>
      `;

      document.getElementById("btnSiJugar").addEventListener("click", () => {
        popup.style.display = "none";
        mainContent.style.display = "block";
        document.body.style.filter = "none";
    
        whatsappLink.href = "https://wa.me/XXXXXXXXXXX"; 
      });

      document.getElementById("btnNoJugar").addEventListener("click", () => {
        alert("Esperamos que quieras jugar pronto.");
        popup.style.display = "none";
        window.close();
      });
    });

    document.getElementById("btnNoEdad").addEventListener("click", () => {
      alert("Lo lamento, tienes que ser mayor de edad.");
      window.close();
    });