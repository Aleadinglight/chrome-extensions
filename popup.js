document.addEventListener('DOMContentLoaded', async() => {
  const titleElement = document.getElementById('randomTitle');
  const gifElement = document.querySelector('.main-gif');
  const okButton = document.getElementById('okButton');
  
  // Paired messages and GIFs
  const messagePairs = [
    {
      title: "⋆˚｡⋆୨✧୧˚ 𝒀𝒐𝒖 𝒉𝒂𝒗𝒆 𝒕𝒐 𝒔𝒎𝒊𝒍𝒆 𝒏𝒐𝒘 𝒑𝒍𝒆𝒂𝒔𝒆! ˚୨✧୧⋆｡˚⋆",
      gif: "gifs/smile1.gif"
    },
    {
      title: "⋆˚｡⋆୨✧୧˚ 𝑾𝒂𝒕𝒆𝒓 𝒕𝒊𝒎𝒆, 𝒏𝒐𝒘! ˚୨✧୧⋆｡˚⋆",
      gif: "gifs/drink.gif"
    },
    {
      title: "⋆˚｡⋆୨✧୧˚ 𝑴𝒂𝒌𝒆 𝒔𝒖𝒓𝒆 𝒕𝒐 𝒆𝒂𝒕 𝒘𝒆𝒍𝒍 ˚୨✧୧⋆｡˚⋆",
      gif: "gifs/snack.gif"
    },
    {
      title: "⋆˚｡⋆୨✧୧˚ 𝒀𝒐𝒖 𝒎𝒖𝒔𝒕 𝒃𝒆𝒍𝒊𝒆𝒗𝒆 𝒊𝒏 𝒚𝒐𝒖𝒓𝒔𝒆𝒍𝒇 𝒇𝒊𝒓𝒔𝒕 ˚୨✧୧⋆｡˚⋆",
      gif: "gifs/hug.gif"
    },
    {
      title: "⋆˚｡⋆୨✧୧˚ 𝑺𝒕𝒐𝒑 𝒕𝒉𝒆 𝒐𝒗𝒆𝒓𝒕𝒉𝒊𝒏𝒌𝒊𝒏𝒈 ˚୨✧୧⋆｡˚⋆",
      gif: "gifs/stop_overthink.gif"
    },
    {
      title: "⋆˚｡⋆୨✧୧˚ 𝒀𝒐𝒖 𝒂𝒓𝒆 𝒆𝒏𝒐𝒖𝒈𝒉, 𝒓𝒆𝒎𝒆𝒃𝒆𝒓 𝒕𝒉𝒂𝒕 ˚୨✧୧⋆｡˚⋆",
      gif: "gifs/love.gif"
    } 
  ];
  
  // Pick a random message pair
  const randomPair = messagePairs[Math.floor(Math.random() * messagePairs.length)];
  
  // Set the paired title and GIF
  titleElement.textContent = randomPair.title;
  gifElement.src = randomPair.gif;
  
  // Handle OK button
  okButton.addEventListener('click', () => {
    window.close();
  });
});