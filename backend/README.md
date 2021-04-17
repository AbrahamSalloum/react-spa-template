this is a template backend that sets up express and jwt auths (with auth0)
.env needs to be changed as per setup.

this needs to be run with https (or will get mixed content errors)

A web browser needs to trust the certificate or it will give a cross-origin error. (visit the server URL in the browser and add a exception for self-signed certs)

run with: npm run start