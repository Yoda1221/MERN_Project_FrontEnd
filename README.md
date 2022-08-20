# MERN Project FroontEnd With React JS

# User Stories

1.  [ ] Replace current sticky note system
2.  [ ] Add a public facing page with basic contact info 
3.  [ ] Add an employee login to the notes app 
4.  [ ] Provide a welcome page after login 
5.  [ ] Provide easy navigation
6.  [ ] Display current user and assigned role 
7.  [ ] Provide a logout option 
8.  [ ] Require users to login at least once per week
9.  [ ] Provide a way to remove employee access asap if needed 
10. [ ] Notes are assigned to specific employees 
11. [ ] Notes have a ticket #, title, note body, created & updated dates
12. [ ] Notes are either OPEN or COMPLETED 
13. [ ] Users can be Employees, Managers, or Admins 
14. [ ] Notes can only be deleted by Managers or Admins 
15. [ ] Anyone can create a note (when customer checks-in)
16. [ ] Employees can only view and edit their assigned notes  
17. [ ] Managers and Admins can view, edit, and delete all notes 
18. [ ] Only Managers and Admins can access User Settings 
19. [ ] Only Managers and Admins can create new users 
20. [ ] Desktop mode is most important but should be available in mobile 

## Start Project
- npx create-react-app ./  -y
- npm i react-router-dom sass
- npm i @reduxjs/toolkit react-redux
- npm i @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons fortawesome/react-fontawesome

## Create folders (MacOSX Teminal)
- md src/components src/sass src/app src/app/api src/config
- md src/features src/features/auth src/features/users

## Create files (MacOSX Teminal)
- touch src/sass/style.scss src/sass/_base.scss src/sass/_public.scss src/sass/_dash.scss src/sass/_form.scss
- touch src/components/index.js src/components/Public.jsx src/components/Layout.jsx
- touch src/components/DashLayout.jsx src/components/DashHeader.jsx  src/components/DashFooter.jsx
- touch src/features/auth/Login.jsx src/features/auth/Welcome.jsx
- touch src/features/users/index.js src/features/users/usersApiSlice.jsx src/features/users/User.jsx
- touch src/features/users/UsersList.jsx src/features/users/EditUser.jsx src/features/users/NewUser.jsx
- touch src/app/store.js src/app/api/apiSlice.js src/config/config.js src/features/users/EditUserForm.jsx


















### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
