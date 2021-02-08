# nasa_api_vuejs

Objective: Create a page that allows the user to search through NASA images.

The app consists of 2 components { Header and ImageWindow } and 1 view { HomePage }.
On page load the user can run the search blank and return latest photos from Nasa or be more specific using 'moon' 'sun' etc.

I have used Axios to query the API and Vuex as the the state management tool to store to data.

I have kept the css simple, but allowed for some transform effects when using desktop.
The images will load in new tab if selected.

ToDo List:

The obvious additions are pagination, adding the ability for users to select display of more images e.g. 18, 27, all and search via media types.
It would be nice to add some summary text on top of the image or below to add some context to the image itself.
On click to load a modal with some further detail and links to download high quality images.
and finally a like button that allows a user to save favorite images to state and or local storage allowing then to be viewed independently.
