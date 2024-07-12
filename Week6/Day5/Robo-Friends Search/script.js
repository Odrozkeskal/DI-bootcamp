document.addEventListener("DOMContentLoaded",function(){
    const robots = [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          image: 'https://robohash.org/wegs'
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
          image: 'https://robohash.org/ss'
        },
        {
          id: 3,
          name: 'Clementine Bauch',
          username: 'Samantha',
          email: 'Nathan@yesenia.net',
          image: 'https://robohash.org/ssssc'
        },
        {
          id: 4,
          name: 'Patricia Lebsack',
          username: 'Karianne',
          email: 'Julianne.OConner@kory.org',
          image: 'https://robohash.org/swv'
        },
        {
          id: 5,
          name: 'Chelsey Dietrich',
          username: 'Kamren',
          email: 'Lucio_Hettinger@annie.ca',
          image: 'https://robohash.org/Makx'
        },
        {
          id: 6,
          name: 'Mrs. Dennis Schulist',
          username: 'Leopoldo_Corkery',
          email: 'Karley_Dach@jasper.info',
          image: 'https://robohash.org/Knight'
        },
        {
          id: 7,
          name: 'Kurtis Weissnat',
          username: 'Elwyn.Skiles',
          email: 'Telly.Hoeger@billy.biz',
          image: 'https://robohash.org/pus'
        },
        {
          id: 8,
          name: 'Nicholas Runolfsdottir V',
          username: 'Maxime_Nienow',
          email: 'Sherwood@rosamond.me',
          image: 'https://robohash.org/kkk'
        },
        {
          id: 9,
          name: 'Glenna Reichert',
          username: 'Delphine',
          email: 'Chaim_McDermott@dana.io',
          image:'https://robohash.org/1488'
        },
        {
          id: 10,
          name: 'Clementina DuBuque',
          username: 'Moriah.Stanton',
          email: 'Rey.Padberg@karina.biz',
          image:'https://robohash.org/slot%20machine'
        }
    ];
        
        const cardContainer = document.getElementById('card-container');
        const searchForm = document.getElementById('search-form');
        const searchInput = document.getElementById('search-input');
        const homeButton = document.getElementById('home');
        
        function createRobotCard(robot){
            const card = document.createElement('div');
            card.classList.add('robot-card');
        
            const image = document.createElement('img');
            image.src = robot.image;
            image.alt = robot.name;
        
            const name = document.createElement('h2');
            name.textContent = robot.name;
            
            const username = document.createElement('p');
            username.textContent = `Username: ${robot.name}`;
        
            const email = document.createElement('p');
            email.textContent = `Email: ${robot.email}`;
        
            card.appendChild(image);
            card.appendChild(name);
            card.appendChild(username);
            card.appendChild(email);
        
            return card;
        }
        function displayRobotCards(robotArray){
            cardContainer.innerHTML = '';
            robots.forEach(robot => {
                const card = createRobotCard(robot);
                cardContainer.appendChild(card);
            })
        }
        function filterRobots(searchTerm){
            const filterRobots = robots.filter(robot =>{
                const name =robot.name.toLowerCase();
                return name.includes(searchTerm.toLowerCase());
            })
            cardContainer.innerHTML= '';
            filterRobots.forEach(robot =>{
                const card = createRobotCard(robot);
                cardContainer.appendChild(card);
            })
        }
        searchForm.addEventListener('submit',function(e){
            e.preventDefault();
        
            const searchTerm = searchInput.value.trim();
            filterRobots(searchTerm);
        })
        homeButton.addEventListener('click',function(e){
            e.preventDefault();
            e.target = displayRobotCards(robots);
        })
        displayRobotCards(robots);
});