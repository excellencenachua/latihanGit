let notes = [];

let notesElement = document.getElementById("notes-list");
let title = document.getElementById("title");
let description = document.getElementById("description");

console.log(notesElement)
function renderNotes() {
    let newNotes = {
        title:title.value,
        description:description.value
    }

    if(title.value == ""||description.value==""){
        alert("lengkapi data")
    }else{
        title.value = "";
        description.value = "";
        notes.push(newNotes);
        notesElement.innerHTML = "";
        notes.forEach((note, index) => {
          const newElement = `
            <div class = "note">
                <h3>${note.title}</h3>
                <p>${note.description}</p>
            </div>
            `;
          notesElement.innerHTML += newElement;
        });
    }

    
}

function deleteNotes(){
    notesElement.innerHTML = ``
    notes = []
}



// renderNotes()