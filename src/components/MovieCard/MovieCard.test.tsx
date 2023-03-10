import { render, screen } from "@testing-library/react";
import MovieCard from "./index";

describe("MovieCard", () => {
  const movie = {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/22z44LPkMyf5nyyXvv8qQLsbom.jpg",
    genres: ["Horror", "Mystery", "Thriller"],
    id: 631842,
    original_language: "en",
    original_title: "Knock at the Cabin",
    direction: "M. Night Shyamalan",
    overview:
      "While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.",
    popularity: 4969.06,
    poster_path:
      "https://image.tmdb.org/t/p/w500/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg",
    release_date: "2023-02-01",
    title: "Knock at the Cabin",
    video: false,
    vote_average: 6.6,
    vote_count: 778,
  };

  test("renders the movie title", () => {
    render(<MovieCard {...movie} />);
    const titleElement = screen.getByText(movie.title);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders the movie poster image", () => {
    render(<MovieCard {...movie} />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toHaveAttribute("src", movie.poster_path);
    expect(imageElement).toHaveAttribute("alt", movie.title);
  });

  test("renders the movie genres", () => {
    render(<MovieCard {...movie} />);
    const genresElement = screen.getByText(movie.genres.join(", "));
    expect(genresElement).toBeInTheDocument();
  });

  test("renders the formatted release date", () => {
    render(<MovieCard {...movie} />);
    const dateElement = screen.getByText("February 1, 2023");
    expect(dateElement).toBeInTheDocument();
  });

  test("renders a link to the movie details page", () => {
    render(<MovieCard {...movie} />);
    const linkElement = screen.getByTestId("MovieBackground__Link");
    expect(linkElement).toBeInTheDocument();
  });

  it("renders character card unchanged", () => {
    const { container } = render(
      <MovieCard
        id={0}
        poster_path={""}
        title={""}
        genres={[]}
        release_date={""}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
