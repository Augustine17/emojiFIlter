function displayEmojis(filterEmoji = ""){
    let list = document.getElementById("emoji_section");

    let filteredData = emojiList.filter(e =>{
        if(e.description.indexOf(filterEmoji) !== -1) return true
        if(e.aliases.some(emoji=>emoji.startsWith(filterEmoji))) return true
        if(e.tags.some(emoji=>emoji.startsWith(filterEmoji))) return true
    })

    list.innerHTML="";
    filteredData.forEach(emoji => {
        let liEl = document.createElement("li");
        liEl.classList.add("emoji_item");
        liEl.innerHTML = `
        <div class="emoji">${emoji.emoji}</div>
        <div class="desc">${emoji.aliases}</div>
        <div class="content">${emoji.description}</div>
        `
        list.appendChild(liEl);
    })
} 

function searchEmoji(){
    let val = document.getElementById("filterEmoji").value
    
    displayEmojis(val)
}

document.getElementById("filterEmoji").addEventListener("keyup", searchEmoji)

window.onload = () => displayEmojis()