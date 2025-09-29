// Ścieżki do zdjęć
const secondImage = "wojciech.png";
const rejectImage = "image.png";

function handleAccept() {
  document.getElementById('preview').src = secondImage;
  document.getElementById('buttons').style.display = 'none';
  document.getElementById('result').innerHTML =
    `Dziękuję kociaku ❤️ <br><span class="happy">Wojciech jest very happy 😊</span>`;
}

function handleReject() {
  document.getElementById('preview').src = rejectImage;
  document.getElementById('buttons').style.display = 'none';
  document.getElementById('result').innerHTML =
    `Propozycja odrzucona 💔 <br><span class="sad">Wojciech jest very sad 😢</span>`;
}

