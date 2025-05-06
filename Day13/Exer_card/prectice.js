function card(title, cName, views, monthsOld, duration, thumbnail){
    //container
    const container = document.querySelector('.container');

    //box1
    const box1 = document.createElement('div');
    box1.className = 'box1';

    //item1
    const item1 = document.createElement('div');
    item1.className = 'item1';

    //item11
    const timeDiv = document.createElement('div');
    timeDiv.className = 'time';
    timeDiv.innerHTML = `<p>${duration}</P>`;

    //item12
     const imgDiv = document.createElement('div');
     imgDiv.className = 'item11';
     
     //img
     const img = document.createElement('img')
     img.src =  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw";
     img.alt = 'thumbnail Image';

     //append
     imgDiv.appendChild(img);

     item1.appendChild(timeDiv)
     item1.appendChild(imgDiv)


     // item2
     const item2 = document.createElement('div')
     item2.className = 'item2';

     //item21
     const item21 = document.createElement('div')
     item21.className = 'item21';
     item21.textcontent = title;

     //item22
     const item22 = document.createElement('div')
     item22.className = 'item22';
     //ul
     const ul = document.createElement('ul')
     ul.innerHTML = ` 
     <li>${cName}</li>
     <li>${views}</li>
     <li>${monthsOld}</li>`;

     //append
     item22.appendChild(ul);

     item2.appendChild(item21);
     item2.appendChild(item22);


     //append
     box1.appendChild(item1);
     box1.appendChild(item2);

     container.appendChild(box1);

    
}

card(
    "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
    "CodewithHarry",
    "727K views",
    "2 months ago",
    "12:21",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);