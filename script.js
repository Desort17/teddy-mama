function speak() {
  const text = document.getElementById("message").innerText;

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "ar-SA";
  speech.rate = 0.9;
  speech.pitch = 1.1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
}
