# INSTALLATION with Docker

`docker build . -t aysebayraktar/fe-exercise`

`docker run --env-file=.env.local -p 3000:3000 aysebayraktar/fe-exercise`

# Online Demo

https://namecheap-fe-exercise.vercel.app/


# 🎬 Movie Search App :movie_camera:

You will create a simple movie search application using React and Next.js.

## Getting Started :rocket:

To run the application locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies.
3. Run `yarn dev` to start the application.

## About the Challenge :book:

In this coding challenge, you will create a movie search application that displays a list of movies and allows users to search for movies and view details about them. The requirements for the application are as follows

1 - Create an API endpoint that returns the data saved on data.json file as a list of movies, also in JSON format.

2 - Display the movies in a responsive grid like in the picture.

![grid wireframe](https://raw.githubusercontent.com/avaleriani/fe-exercise/main/public/support/one.png?raw=true)

The grid should display the movie posters, title, year, and genre. The grid should be responsive, with the number of movies per row changing depending on the screen size. The grid should also be scrollable.

3- When a user clicks on a movie, a modal should open and display the following information:

Title

Movie poster

(Year) (Director) (Genre)

Plot

![modal wireframe](https://raw.githubusercontent.com/avaleriani/fe-exercise/main/public/support/dos.png?raw=true)

4 - Create a new API endpoint called search.ts that receives a string input and returns the data.json movies filtered by name.

5 - Create an input where the user can enter a movie title (partial match included), and using the search button, the list will be filtered.

6 - For only one of the React components in the application, provide unit tests that can be run with the yarn test command.

8 - (Optional) Deploy the application so that we can see it running.

### Notes :pencil2:

- The code should be written in TypeScript using the React library and Next.js as a building tool.
- You may use any CSS framework or library you like, such as Styled Components, Emotion, Bootstrap, or Tailwind CSS.
- You may use any testing library you like, such as Jest or React Testing Library.
- Please make sure to write clean, readable, and maintainable code.
- If you would like to contribute to the development of this application, please fork the repository and submit a pull request.
- Keep it simple.

Good luck with the coding challenge!
