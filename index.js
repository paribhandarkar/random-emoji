const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji() {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=5e870f272892ce13970c937cfeee25b6324fd3ee"
  );

  data = await response.json();

  for (let index = 0; index < 1500; index++) {
    emoji.push({
      emojiName: data[index].character,
      emojiCode: data[index].unicodeName,
    });
  }
}

getEmoji();

btnEl.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * emoji.length);
  btnEl.innerText = emoji[randomNum].emojiName;
  emojiNameEl.innerText = emoji[randomNum].emojiCode;
});
