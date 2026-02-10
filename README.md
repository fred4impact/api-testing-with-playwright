# Playwright Page Objects Steps 
- Steps 1 : Create a new directory and cd into it 
- Step 2 : Install and Setup Playwright choose prefeered settings  
npm init -y and npm init playwright@latest 
- you can create s sample tests and run and see if all is working
- Step 3 : Confifure your config settings
- Step 4 : Creat a new folder in the project directory called "pages"
- Steps 5 : Create respective pages e.g "HomePage.js"
- Steps 6: Create the variables, constructor, and functions of the page and functions of each page 
- Step 7:  Create a test eg " smoke.spec.js" in the test directory
- Step 8:  Create a test and import the pages directory of each page in the soke.spec.js
- Step 9:  Create const of each page and use it to call the methods of each page 

# api-testing-with-playwright

# Open the Project in VS Code
 - git clone repo into your directory 

- Open VS Code.
- Click File → Open Folder…
- Select the folder where you cloned the repo.

  2. Install Node.js Dependencies
  ```bash
  npx playwright install
  npx playwright install
  # Inspect the package.json Scripts

  # Run the Tests
  npm test OR
  npx playwright test

 # (Optional) Run Specific Test Files
 npx playwright test tests/<filename>.spec.js

 # View HTML Test report 
 npx playwright show-report


