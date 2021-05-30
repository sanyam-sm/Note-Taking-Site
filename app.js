console.log("welocme to notes app")
showNotes();
//If a user add a note, add it to local storage
// Adding a title option

let addBtn = document.getElementById("addbtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt")
    let notes = localStorage.getItem("notes");
    let addTitle = document.getElementById("addTitle");
    let title = localStorage.getItem("title")

    if (title == null) {
        titleObj = [];     
    }
    else{
        titleObj = JSON.parse(title);
    }
    titleObj.push(addTitle.value);
    localStorage.setItem("title", JSON.stringify(titleObj));
    addTitle.value = "";
    console.log(titleObj)

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
});

// Function to show created notes
function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
         <div id="notecard" class="noteCard my-2 mx-2 card " style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Note ${index + 1}</h5>
                  <p class="card-text">${element}</p>
                  <a id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</a>
                </div>
              </div>
          </div>`
    });

    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;

    }
    else {
        notesElm.innerHTML = `Nothing to show you`;
    }
};

// function to delete notes
function deleteNote(index) {
    console.log("I am deleting", index);
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();  
};

let search = document.getElementById("searchTxt");
search.addEventListener("input",function () {

    let inputVal = search.value.toLowerCase();
    console.log("input event fired",inputVal);
    let noteCards = document.getElementById("notecard")
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";   
        }
        else{
            element.style.display = "block";   
            
        }
        console.log(cardTxt);

        
    })
})

