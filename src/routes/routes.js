/**
 * ## routes
 * configuration for the browser routing
 */

const routeObject = (path, name) => ({path, name})

export const Routes = [
  routeObject('/', 'home'), // change this to just an empty path later
  routeObject('about', 'about us'),
  routeObject('contact', 'contact us'),
]