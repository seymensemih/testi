let totalGoal = 8000; // Hedef bağış miktarı

window.addEventListener("onEventReceived", function (event) {
  console.log("Event Received:", event.detail);
  const data = event.detail.event;

  // Bağış türündeki olayları kontrol et
  if (data && data.type === "tip") {
    let amount = parseFloat(data.amount);
    let percentage = Math.min((amount / totalGoal) * 100, 100); // Doluluk yüzdesi hesapla
    let result = (percentage / 100) * 328;
    const fillElement = (document.querySelector(
      ".bottle-container .mask .fill"
    ).style.height = `${result}px`); // CSS'i güncelle
  }
});
