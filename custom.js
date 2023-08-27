const Addnote =document.querySelector("#Addnote")
const main =document.querySelector("#main")
Addnote.addEventListener(
    "click",
    function(){
        addbtn()
    }
)


const addbtn = (text = "") => {
    const note =document.createElement("div");
    note.classList.add("note")
    note.innerHTML = 
    `
    <div class="tool">

    <i class="save fas fa-save"></i>
    <i class="trash fas fa-trash"></i>
    
    </div>
    <textarea>${text}</textarea>
    `;
    note.querySelector(".trash").addEventListener(
        "click",
        function()
        {
            note.remove()
            saveNotes()
        }
    )
    note.querySelector(".save").addEventListener(
        "click",
        function(){
            saveNotes()
        }
    )
    note.querySelector("textarea").addEventListener(
        "focusout",
        function()
        {
            saveNotes()
        }
    )
   main.appendChild(note);
   saveNotes()
    
    

}

const saveNotes = () =>{
    const notes =document.querySelectorAll(".note textarea")
    const data = [];
    notes.forEach(
        (note) =>{

            data.push(note.value)
        }
    )
    if(data.length == 0 )
    {
        localStorage.removeItem("notes")
    }
    else{

        localStorage.setItem("notes",JSON.stringify(data))
    }
    

}
(
    function(){

        const lsnotes = JSON.parse(localStorage.getItem("notes"));
        if(lsnotes == null){

            addbtn()

        }
        else
        {
            lsnotes.forEach(
                (lsNote) => {
                    addbtn(lsNote)
                }
            )
        }
       
        
    }
)()
