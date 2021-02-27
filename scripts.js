function hide()
{
 var sentenceArray = [
		"Begrüße die anderen Teilnehmenden via Chat mit einem freundlichen Gruß.",
		"Bedanke Dich im Chat oder per Audio, wenn Dir etwas hilft und Du etwas nützlich findest.",
		"Gib anderen Erfahrungen oder Ideen von Dir weiter.",
		"Mache transparent, wenn Du abgelenkt bist und nicht mehr weiter folgen kannst.",
		"Beantworte soweit es Dir möglich ist, die Fragen von anderen im Chat.",
		"Wenn Dein Video angestellt ist, dann nutze Handzeichen, um anderen Rückmeldungen zu ihren Beiträgen zu geben.",
		"Wenn die Videokonferenz für Dich nicht passt und Du frühzeitig gehen willst, dann mache das den anderen transparent.",
		"Nimm Kontakt zu anderen über private Chatnachrichten auf - und erweitere so gegebenenfalls Dein persönliches Lernnetzwerk.",
		"Erinnere in der Konferenz dara, dass spätestens nach einer Stunde eine kurze Pause gemacht wird.",
		"Sei empathisch zu anderen, die aktuell vielleicht in einer schwierigen Situation sind."
		],

  randSentence = sentenceArray[Math.floor(Math.random() * sentenceArray.length)];
  document.getElementById("wellSentence").textContent = randSentence;
  if (typeof prevSentence == "undefined") {
        newSentence = randSentence;
      } else {
        newSentence = randSentence;
        if (newSentence == prevSentence) randomNum += 1;
      };
  }

 // Selecting button element
    var btn = document.getElementById("starten");
     
    // Assigning event listeners to the button
    btn.addEventListener("click", hide);
