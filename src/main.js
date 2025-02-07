document.addEventListener('DOMContentLoaded', function() {
  let butto = document.querySelector("#botao");
  let text = document.querySelector("#texto");

  butto.addEventListener("click", () => {
    let valueinput = text.value;
    let blobdtMIME = new Blob([valueinput], { type: "text/plain" });
    let url = URL.createObjectURL(blobdtMIME);
    let anele = document.createElement("a");
    anele.setAttribute("href", url);
    let timestamp = Date.now();
    anele.setAttribute("download", `text_${timestamp}.txt`);
    anele.click();
    console.log(blobdtMIME);
  });
});
