const reviews = [
    {
        id:1,
        author_name:"Martha Bruce",
        job:"Web Designer",
        info:"Creates visually appealing and user-friendly websites using HTML, CSS, and UX design principles for a seamless online experience.",
        img:'./images/person1.jpg'
    },
    {
        id:2,
        author_name:"Elena Raven",
        job:"Web Developer",
        info:"Codes and builds websites and web applications using various programming languages and frameworks for functionality and interactivity",
        img:'./images/person2.jpg'
    },
    {
        id:3,
        author_name:"Lock Lambert",
        job:"Android Developer",
        info:"Designs and develops Android applications, leveraging Java/Kotlin and Android Studio to create innovative mobile experiences and features",
        img:'./images/person3.jpg'
    },
    {
        id:4,
        author_name:"Dante Vel",
        job:"Ios Developer",
        info:"Creates iOS apps using Swift/Objective-C and Xcode, optimizing user experience for Apple devices and the App Store",
        img:'./images/person4.jpg'
    },
    {
        id:5,
        author_name:"Emilie Blunt",
        job:"ML Engineer",
        info:"Designs, develops, and deploys machine learning models for data analysis, automation, and predictive insights using algorithms and data",
        img:'./images/person5.jpg'
    },
]

let profile_img = document.getElementById("profile")
let authors = document.getElementById("authors")
let job = document.getElementById("job")
let info = document.getElementById("info")

let left = document.getElementById("left")
let right = document.getElementById("right")
let surprise = document.getElementById("random")

let current = 0
window.addEventListener("DOMContentLoaded",(()=>{
     setItems(0)
     
}))

right.addEventListener('click',(()=>{
     current++
     if(current > reviews.length - 1){
        current = 0
     }
     setItems(current)
    
}))

left.addEventListener('click',(()=>{
    current--
    if(current < 0){
       current = reviews.length - 1
    }
    setItems(current)
   
}))



function setItems(current){
    let item = reviews[current]
    profile_img.src = item.img
    authors.innerText = item.author_name
    job.innerText = item.job
    info.innerText = item.info
}

surprise.addEventListener('click',(()=>{
    let random = Math.floor(Math.random() * (reviews.length))
    console.log(random)
    setItems(random)
}))