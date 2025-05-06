function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Select the container where cards go
    const container = document.querySelector('.container');

    // Create box1 div
    const box1 = document.createElement('div');
    box1.className = 'box1';

    // item1 div (image + time)
    const item1 = document.createElement('div');
    item1.className = 'item1';

    const timeDiv = document.createElement('div');
    timeDiv.className = 'time';
    timeDiv.innerHTML = `<p>${duration}</p>`;

    const imgDiv = document.createElement('div');
    imgDiv.className = 'item11';
    const img = document.createElement('img');
    img.src =  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw";
    img.alt = 'thumbnail image';
    imgDiv.appendChild(img);

    item1.appendChild(timeDiv);
    item1.appendChild(imgDiv);

    // item2 div (title + details list)
    const item2 = document.createElement('div');
    item2.className = 'item2';

    const item21 = document.createElement('div');
    item21.className = 'item21';
    item21.textContent = title;

    const item22 = document.createElement('div');
    item22.className = 'item22';
    const ul = document.createElement('ul');
    ul.innerHTML = `
        <li>${cName}</li>
        <li>${views}</li>
        <li>${monthsOld}</li>
    `;
    item22.appendChild(ul);

    item2.appendChild(item21);
    item2.appendChild(item22);

    // Add item1 and item2 to box1
    box1.appendChild(item1);
    box1.appendChild(item2);

    // Append box1 to container
    container.appendChild(box1);
}

// Example usage:
createCard(
    "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
    "CodewithHarry",
    "727K views",
    "2 months ago",
    "31:21",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
createCard(
    "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
    "CodewithHarry",
    "727K views",
    "2 months ago",
    "31:21",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
createCard('item1',)
