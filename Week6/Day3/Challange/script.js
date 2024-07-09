class Video {
    
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`);
    }
};
const videoArchive = [
    {title:'title_A', uploader:'uploader_A', time:120},
    {title:'title_B', uploader:'uploader_B', time:140},
    {title:'title_C', uploader:'uploader_C', time:160},
    {title:'title_D', uploader:'uploader_D', time:180},
    {title:'title_E', uploader:'uploader_E', time:220}
];

videoArchive.forEach((vid,i)=>{
     const myVid = new Video(vid.title,vid.uploader,vid.time);
     myVid.watch();
})
// const myVid = new Video('title_A','uploader_A', 120);
// const myVid2 = new Video('title_B', 'uploader_B', 180);

// myVid.watch();
// myVid2.watch();