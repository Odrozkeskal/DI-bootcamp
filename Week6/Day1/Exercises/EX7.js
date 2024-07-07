(function(userName) {
    const userInfoDiv = document.createElement('div');
    userInfoDiv.classList.add('user-info');

    const profileImg = document.createElement('img');
    profileImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSybwD9j6IqS44MjjOKSUegJMy1QEwbY9qdew&s'; 
    profileImg.alt = 'Profile Picture';

    const userNameSpan = document.createElement('span');
    userNameSpan.textContent = userName;

    userInfoDiv.appendChild(profileImg);
    userInfoDiv.appendChild(userNameSpan);

    const navbar = document.getElementById('navbar');
    navbar.appendChild(userInfoDiv);
})('John'); 