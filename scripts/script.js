questionsList = [
    {
        question: "How many team members can I invite?",
        response: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },

    {
        question: "What is the maximum file upload size?",
        response: "No more than 2GB. All files in your account must fit your allotted storage space.",
    },

    {
        question: "How do I reset my password?",
        response: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },

    {
        question: "Can I cancel my subscription?",
        response: "Yes! Send us a message and we’ll process your request no questions asked.",
    },

    {
        question: "Do you provide additional support?",
        response: "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },   
]


const DOM = {
    listElement: document.querySelector("ul"),
    
    getIconArrow(index) {
        const imgElement = document.createElement("img")
        
        imgElement.setAttribute('src', './images/icon-arrow-down.svg')
        imgElement.setAttribute('alt', 'Seta indicativa de direção')
        imgElement.setAttribute('onclick', 'listController.controllerContent(' + index + ')')
        
        return imgElement;
    },
    
    showQuestions() {
        
        questionsList.forEach((q, index)=> {
            
            let divElement = document.createElement("div")
            let spanElement = document.createElement("span")
            let paragraphElement = document.createElement("p")
            let liElement = document.createElement("li")
            let iconArrowElement = DOM.getIconArrow(index)
            
            spanElement.setAttribute('onclick', 'listController.controllerContent(' + index + ')')
            
            let textParagrath = document.createTextNode(q.response)
            let textSpan = document.createTextNode(q.question)
            
            divElement.classList.add("group-items")
            paragraphElement.classList.add("optionClose")
            
            spanElement.appendChild(textSpan)
            divElement.appendChild(spanElement)
            divElement.appendChild(iconArrowElement)
            paragraphElement.appendChild(textParagrath)
            liElement.appendChild(divElement)
            liElement.appendChild(paragraphElement)
                        
            DOM.listElement.appendChild(liElement)
        })
        
    }
}

DOM.showQuestions()

const listController = {
    paragraphList: document.querySelectorAll("ul p"),
    spanList: document.querySelectorAll("ul span"),
    iconArrowList: document.querySelectorAll("ul img"),

    openContent(p, s, i) {
        p.classList.remove("optionClose")
        s.classList.add("liSelected")
        i.classList.add("openingPosition")
    },

    closeContent(p, s, i) {
        p.classList.add("optionClose")
        s.classList.remove("liSelected")
        i.classList.remove("openingPosition")
    },

    closeAllContents() {
        listController.paragraphList.forEach((p, index) => {
        let s = listController.spanList[index]
        let i = listController.iconArrowList[index]

            listController.closeContent(p, s, i)
        })
    },

    controllerContent(index) {
        let p = listController.paragraphList[index]
        let s = listController.spanList[index]
        let i = listController.iconArrowList[index]

        if(p.matches(".optionClose")) {
            listController.closeAllContents()
            listController.openContent(p, s, i)
        } else {
            listController.closeContent(p, s, i)
        }
    }
}
