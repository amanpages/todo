1. In this assignment we have created a full functional TODO application which includes a Database, here we used mysql.
2. Here are two folders one names todo-be and another names todo-front.
the todo-be folder handles the backend operations with the help of node and express.
3. The todo-ront folder handles the front end functionality of the application.
4. Node modules are excluded for storage allowance we can install it by npm install, and other dependencies with their required commands.
5. The sql database name is TODO and table name is todos.


    In todo-be folder

1. Here we have included express to handle backend functionality to connect to the databse.
2. In my case i hava a Database named TODO which gets connection from the host as localhost and user as root and password left empty string.
3. This folder includs cors, mysql, and body parser to begin with the server.
4. To begin the server first we need to install dependencies as node modules is deleted here for storage purpose and cors and body perser. To install we will type required dependencies install command.
5. This handles the delete functionality too to delete the list and display it in the frontend.
6. To start server we will come in its directory and start with node or nodemon after installing nodemon along with file name here index.js
7. Here we will have to start Sql data base too, when data gets added it shows data added in terminal of VS code and similar for deleted data.
8. If no data is feed in the list and we try to add it will show alert of "enter a todo".

    In todo-front folder
    
1. It serves as the frontend of the website where user is required to put the tasks and then the data gets feed into server and displayed here as a list format and it has delete buttons to delete the tasks.
2. In this folder we have written all the codes in App.js file and not created components and css in App.css file.
3. Here we have included Axios to proper communicate with the backend for data feeding and fetching.
4. This folder also does not have node modules and will require us to install dependencies as axios.
5. To start server we will first come in its directory and will hit npm start to start after installing required dependencies. 
