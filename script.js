// Ścieżki do zdjęć
const secondImage = "https://cdn.discordapp.com/attachments/1114938873907257354/1422297724103168051/wojciech.png";
const rejectImage = "https://cdn.discordapp.com/attachments/1114938873907257354/1422299207410389173/image.png";

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
