
# This project was bootstrapped with:
 - [Create React App](https://github.com/facebook/create-react-app)
 - [react-responsive-carousel](https://github.com/leandrowd/react-responsive-carousel)
 - [react-date-range](https://github.com/hypeserver/react-date-range#readme)
 - [cors-anywhere](https://github.com/Rob--W/cors-anywhere#readme)
 - [Google Maps Embed API](https://developers.google.com/maps/documentation/embed/get-started)


# Generic project structure
- `Shell` wraps around `Header` with navigation, `Footer` and main content containers `HomePage` and `AboutPage`
- `HomePage` has listings on in.
- All listings are driven by `listings.json` file that is located in `src\assets\json\listings.json`

# Google Maps
To be able to utilize google maps project needs to have `api key`.
Please read official documents how to create `api key`. [Google documentation](https://developers.google.com/maps/documentation/javascript/get-api-key).
 
# VRBO and AirBnb csi calendar links
There is a gotcha with csi calendar links.
There is no simple way just to get csi file content based on the link on client side. 

If you are trying to make a request from client-side javascript to csi urls it will fail with [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

The workaround that is implemented to that website is - there is a simple web service hosted in [heroku](https://www.heroku.com/) for free that works as proxy. 

Basically website calls that proxy service passing csi url as query parameter -> proxy calles that csi url and returns data back to client side not causing CORS.

I am using [cors-anywhere](https://github.com/Rob--W/cors-anywhere#readme) for this purpose.
Here is what I did:
1. I forked `cors-anywhere` repo
2. created new NodeJS service in heroku
3. connected my forked repo to that service
4. deployed
5. get service url and use it in client in `HopePage` in `componentDidMount` hook

# Hosting

 ---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
