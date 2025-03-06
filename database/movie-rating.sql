# Write your MySQL query statement below
WITH ResultMovie
AS
(
    SELECT title AS results, AVG(rating) AS average_rating FROM Movies
    JOIN MovieRating
    ON Movies.movie_id = MovieRating.movie_id
    WHERE MONTH(created_at) = 2
    AND
    YEAR(created_at) = 2020
    GROUP BY title
    ORDER BY average_rating DESC, title ASC
    LIMIT 1
),
ResultPerson
AS
(
    SELECT name AS results, COUNT(name) AS 'count' FROM Users
    JOIN MovieRating
    ON Users.user_id = MovieRating.user_id
    GROUP BY name
    ORDER BY count DESC, name ASC
    LIMIT 1
)
SELECT results FROM ResultPerson
UNION ALL
SELECT results FROM ResultMovie