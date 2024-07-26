let myLeads=[]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulel=document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const saveBtn=document.getElementById("save-btn")
const LocalItems=JSON.parse(localStorage.getItem("myLeads"))

if(LocalItems){
    myLeads=LocalItems
    renderLeads()

}
saveBtn.addEventListener("click",function(){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))

        renderLeads()

    })
})
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    renderLeads()
})

inputBtn.addEventListener("click",function(){
    
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))

    renderLeads()

})

function renderLeads(){
    let rend=""
    for(let i=0;i<myLeads.length;i++){
        rend+=`
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>`
            
    }
        
    ulel.innerHTML=rend
        
        
}

