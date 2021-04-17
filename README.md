backend/frontend template for prototyping and minimal boilerplate

## Frontend
React basic template that uses create-react-app, Redux, Auth0, and react-router-dom.

To be used with the backend template ("backend" folder) which uses express and jwts for auth (from auth0)

.env needs to be changed

Auth0 needs https, so run with (Bash):
 HTTPS=true npm start




## Backend
this is a template backend that sets up express and jwt auths (with auth0)
.env needs to be changed as per setup.

To be used with the frpntend template "frontend" folder)

this needs to be run with https (or will get mixed content errors)

A web browser needs to trust the certificate or it will give a cross-origin error. (visit the server URL in the browser and add a exception for self-signed certs)

run with: npm run start
