# Reactdog - RUM/APM/LOGS

The reactdog sandbox will guide you through RUM setup and provide a visualization for RUM events and instrumentation. Reactdog uses Reactjs as a frontend framework and Nodejs/Express as a sample backend server. The Reactjs frontend utilizes the history API to make all paths available in the Datadog dashboard. Beyond RUM, reactdog will allow you to troubleshoot APM issues and practice using Docker commands while brushing up on docker-compose.yml configuration and usage of environmental variables.

# Before You Start: 
Please verify that Docker Desktop is installed on your machine with the following command

`docker --version`

If Docker Desktop is not installed, please follow this link: https://www.docker.com/products/docker-desktop

# Steps to Start Reactdog:

1. Download the reactdog folder or clone the repo to your machine
2. Navigate to the UX monitoring tab in the Datadog UI and select RUM applications
3. Create a new application: https://app.datadoghq.com/rum/create
4. Name your application, preferably `reactdog` ;), and select `Generate Client Token`
5. Enter the `clientToken`, `applicationId`, and your `API Key` into the proper environmental variables in the docker-compose.yml (Please note you will need to add your API Key twice)
6. From the root file, run the command `docker-compose up -d` to download and start the containers. This step may take a few minutes as the images download from Docker hub
7. Once the command is completed, please verify all three containers are running with the command `docker ps`. 
8. Open Google Chrome and head to `http://localhost:3000` to view the react application

# How To:
1. Use the "Click Simulator" to view click events provided by the `datadogRum.addUserAction` method
2. Use the "Navigation Simulator" to view different paths 
3. Use the "Server Error Simulator" to view different types of errors 
4. See the different dashboards available in your Datadog sandbox at https://docs.datadoghq.com/real_user_monitoring/dashboards/
5. Feel free to play with log ingestion and APM while you're at it!

**Please note that this application can be ran without docker by:**
1. Opening reactdog and nodedog separately, in your code editor of choice
2. Start reactdog with the command `npm start`
3. Start nodedog with the command `nodemon server.js`
4. Sit back, relax, and enjoy that RUM action

To stop reactdog, please run the command `docker-compose down`. This will kill and remove the Docker containers

# Next Up:
- graphql integration
- kubernetes madness

**Problems?**
Feel free to reach out to zach.gwirtz@datadoghq.com