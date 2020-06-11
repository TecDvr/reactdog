# Reactdog - RUM/APM/LOGS

The Reactdog sandbox will guide you through RUM setup and provide a visualization for RUM events and instrumentation. Reactdog uses reactjs as a frontend framework and nodejs/express as a sample backend server. The reactjs frontend utulizes the history API to make all paths available in the Datadog dashboard. Beyond RUM, reactdog will allow you to troubleshoot APM issues and practice using docker commands while brushing up on docker-compose.yml configuration and useage of environmental variables.

# Before You Start: 
Please verify that Docker Desktop is installed on your machine with the following command

`docker --version`

If Docker Desktop is not installed, please follow this link: https://www.docker.com/products/docker-desktop

# Steps to Start Reactdog:

1. Download the Reactdog folder or clone the repo to your machine
2. Navigate to the UX monitoring tab in the Datadog UI and select RUM applications
3. Create a new application: https://app.datadoghq.com/rum/create
4. Name your application, preferably `reactdog`, and select `Generate Client Token`
5. Enter the `clientToken`, `applicationId`, and your `API Key` into the proper environmental variables in the docker-compose.yml (Please note you will need to add your API Key twice)
6. From the root file, run the command `docker-compose up -d` to download and start the containers. This step may take a few minutes as the images download from docker hub
7. Once the command is completed, please verify all three containers are running with the command `docker ps`. 
8. Open Google Chrome and head to `http://localhost:3000` to view the react application
9. Click the button simulation to view 


```
test
test
test
 ```



To stop reactdog, please run the command `docker-compose down`. This will kill and remove the docker containers

# Next Up:
- graphql integration
- kubernetes madness
