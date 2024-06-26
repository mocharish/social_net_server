Link to repository: https://github.com/YehonatanHayat/part3_server.git

Link to web repository: https://github.com/YehonatanHayat/part2.git

Link to android repository: https://github.com/mocharish/A.S_part2.git

This repository represents the FeedBook server which is the backend for our project, it connects between the client and the data base. It provides APIs for user authentication proccess,
manages friend connections and posts and more.

Running instructions:

1. Clone the repository and initialize the users and posts collections in your MongoDB with the Json files in the "db" folder in the main branch.

2. Create a 'env.local' file in the config folder and add the environment variables. For example:

   CONNECTION_STRING="mongodb://localhost:27017/Feedbook"
PORT=8080

4. Navigate to the project and install the dependencies using npm.

5. Start the server:  "npm start"

6. Start the web according to the instructions given in the web repository.

Workflow: After reading and understanding the instructions of the project we came up with ideas of how to operate and then divided the tasks between us. We created a Jira accordingly.
Each one of us worked on parts of both the web and the server and merged the work through the git hub to stay on the same page. We both had our own branches.
We made sure to structure our code with the MCV structure.

