const mongoose = require('mongoose');
const Chat = require('./models/chat');

main().then(()=>{
    console.log("Connection successful");
})
.catch((err)=>{
console.log(err);
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allchats = [
    {
        from: "Rishu",
        to: "rohan",
        msg: "Hi, bro whatsaup",
        created_at: new Date()   
    },
    {
        from: "viakas",
        to: "Chirag",
        msg: "Lets go out for a movie...",
        created_at: new Date()   
    },
    {
        from: "Dhruv",
        to: "Anshul",
        msg: "Help me out..",
        created_at: new Date()   
    },
    {
        from: "Ritik",
        to: "Sujal",
        msg: "it is out not let go nd watch it.",
        created_at: new Date()   
    },
    {
        from: "Shivansh",
        to: "Irina",
        msg: "i m bored...😑",
        created_at: new Date()   
    },
    {
        from: "Isha",
        to: "Raj",
        msg: "did u call me yesterday?",
        created_at: new Date()   
    },
    {
        from: "Rohit",
        to: "Shailesh",
        msg: "i bought a new phone",
        created_at: new Date()   
    },
    {
        from: "Ritesh",
        to: "Suzeen",
        msg: "Can we talk?",
        created_at: new Date()   
    },
        {
        from: "Ayush",
        to: "Shubh",
        msg: "Lets join a gym from tomorrow",
        created_at: new Date()   
    },
    {
        from: "Rupal",
        to: "Rohini",
        msg: "Ahh! i failed again",
        created_at: new Date()   
    },
    {
        from: "Roshni",
        to: "Raghav",
        msg: "Did u update the previous term?",
        created_at: new Date()   
    },
]


Chat.insertMany(allchats);


