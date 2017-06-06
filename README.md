# iDeel

## Description
- File will be uploaded soon

## Contributors
- Riley : riley.du@gmail.com 
- Benson : li_benson12@hotmail.com
- Roger : lhyroger@gmail.com

## Reference
* Github Markdown Syntax: [Link](https://drive.google.com/drive/folders/0BxoXWWKb_tfoYXZ4cUVBVkJJNTQ)

## Initial Setup
- Download Install Node js
- Download MongoDB
- Clone repo
- run `npm install --save`
- Go to the folder that mongo was installed and run "mongod.exe"
- run `npm start`

## Additional Info
If you created a new folder, make sure you add a path for it in the `tsconfig.json` file so that it will transpile the .ts to .js files.

Open `localhost:3000` in your browser

## Load Data Into DB Scipt
- **Assume that we alreay have ideel db creater and local user created**
- Start up `mongod.exe`
- Open Mongo Shell
- run `load("/Users/youruserprofile/iDeel/createDB/createiDeelData.js")

### Routes:
**GET**     /dashboard/jobs/:jobid         Get single job information <br>
**GET**     /dashboard/jobs                Get list of jobs <br>
**POST**    /dashboard/jobs/               Create job <br>
**DELETE**  /dashboard/jobs/:jobid         Delete a specific job<br>
**GET**     /dashboard/                    Get home page <br>
**PUT**     /dashboard/jobs/:jobid         Update job <br>
**GET**     /dashboard/search              Search query

**GET**     /users/:id/info                Get single user information <br>
**POST**    /users/:id                     Create user <br>
**GET**     /users/:id                     Get specific user <br>
**DELETE**  /users/:id                     Delete specific user <br>
**GET**     /users                         Get list of all users <br>
**GET**     /users/bUsers                  Get list of business users <br>
**GET**     /users/wUsers                  Get list of worker users <br>
**PUT**     /users/:id/info                Update user information  <br>

