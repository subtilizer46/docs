## Where(L2)

1. What is the title of the movie released in 2020?
```sql
SELECT Title FROM Movies WHERE ReleaseYear = 2020;
```
2. Which movies have a runtime of more than 120 minutes?
```sql
SELECT Title FROM Movies WHERE Runtime > 120;
```
3. Find the movies with a rating greater than 7.0.
```sql
SELECT Title FROM Movies WHERE Rating > 7.0;
```
4. Which movies fall under the "Action" genre?
```sql
SELECT Title FROM Movies WHERE Genre = 'Action';
```
5. Show me the description of movies released in 2019.
```sql
SELECT Description FROM Movies WHERE ReleaseYear = 2019;
```
6. What is the box office revenue for movies directed by 'Director 5'?
```sql
SELECT BoxOfficeRevenue FROM Movies WHERE Director = 'Director 5';
```
7. List movies with a release year greater than 2021.
```sql
SELECT Title FROM Movies WHERE ReleaseYear > 2021;
```
8. Show me the posters of movies with a rating less than 7.0.
```sql
SELECT PosterURL FROM Movies WHERE Rating < 7.0;
```
9. Find the director of 'Movie 3'.
```sql
SELECT Director FROM Movies WHERE Title = 'Movie 3';
```
10. List the titles of movies released in 2018 and 2020.
```sql
SELECT Title FROM Movies WHERE ReleaseYear IN (2018, 2020);
```
11. Which movies have a box office revenue less than $10 million?
```sql
SELECT Title FROM Movies WHERE BoxOfficeRevenue < 10000000.00;
```
12. Find movies with a runtime of exactly 105 minutes.
```sql
SELECT Title FROM Movies WHERE Runtime = 105;
```
13. Show me the release date of 'Movie 6'.
```sql
SELECT ReleaseDate FROM Movies WHERE Title = 'Movie 6';
```
14. What are the genres of movies directed by 'Director 8'?
```sql
SELECT Genre FROM Movies WHERE Director = 'Director 8';
```
15. List the titles of movies with a runtime less than 100 minutes.
```sql
SELECT Title FROM Movies WHERE Runtime < 100;
```
* 16. Which movies have a release date in June?
```sql
SELECT Title FROM Movies WHERE MONTH(ReleaseDate) = 6;
```
17. Find the rating of 'Movie 12'.
```sql
SELECT Rating FROM Movies WHERE Title = 'Movie 12';
```
18. Show me the description of movies released in 2017 or 2027.
```sql
SELECT Description FROM Movies WHERE ReleaseYear IN (2017, 2027);
```
19. What is the box office revenue for 'Movie 19'?
```sql
SELECT BoxOfficeRevenue FROM Movies WHERE Title = 'Movie 19';
```
20. List movies with a genre of "Drama" or "Comedy".
```sql
SELECT Title FROM Movies WHERE Genre IN ('Drama', 'Comedy');
```
21. Show me the posters of movies with a release year greater than 2025.
```sql
SELECT PosterURL FROM Movies WHERE ReleaseYear > 2025;
```
22. Find the director of 'Movie 15'.
```sql
SELECT Director FROM Movies WHERE Title = 'Movie 15';
```
23. List the titles of movies with a runtime between 110 and 130 minutes.
```sql
SELECT Title FROM Movies WHERE Runtime BETWEEN 110 AND 130;
```
24. Which movies have a release year less than 2015?
```sql
SELECT Title FROM Movies WHERE ReleaseYear < 2015;
```
25. Show me the release date of 'Movie 8'.
```sql
SELECT ReleaseDate FROM Movies WHERE Title = 'Movie 8';
```
26. What are the genres of movies with a rating of 8.0 or higher?
```sql
SELECT Genre FROM Movies WHERE Rating >= 8.0;
```
27. List the titles of movies with a box office revenue greater than $12 million.
```sql
SELECT Title FROM Movies WHERE BoxOfficeRevenue > 12000000.00;
```
28. Show me the descriptions of movies directed by 'Director 4'.
```sql
SELECT Description FROM Movies WHERE Director = 'Director 4';
```
29. Find the rating of 'Movie 10'.
```sql
SELECT Rating FROM Movies WHERE Title = 'Movie 10';
```
* 30. List the titles of movies with a release year in the 2020s.
```sql
SELECT Title FROM Movies WHERE ReleaseYear >= 2020 AND ReleaseYear <= 2029;
```
