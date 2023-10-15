## Function(L3)

1. What is the purpose of SQL aggregate functions?
2. How can you calculate the total box office revenue for all movies in the "Movies" table?
```sql
SELECT SUM(BoxOfficeRevenue) FROM Movies;
```
3. Which aggregate function can be used to find the average rating of all movies?
```sql
SELECT AVG(Rating) FROM Movies;
```
4. How can you find the highest box office revenue among all movies in the table?
```sql
SELECT MAX(BoxOfficeRevenue) FROM Movies;
```
5. What is the result of applying the COUNT() aggregate function to the "Movies" table?
```sql
SELECT COUNT(*) FROM Movies;
```
6. How do you calculate the sum of runtime for all movies in the "Movies" table?
```sql
SELECT SUM(Runtime) FROM Movies;
```
7. Can you use an aggregate function to determine the earliest release date among all movies?
```sql
SELECT MIN(ReleaseDate) FROM Movies;
```
8. What aggregate function helps you find the lowest rating among all movies?
```sql
SELECT MIN(Rating) FROM Movies;
```
9. How can you count the number of movies in the "Action" genre?
```sql
SELECT COUNT(*) FROM Movies WHERE Genre = 'Action';
```
10. Which aggregate function is used to calculate the average runtime of movies in the "Drama" genre?
```sql
SELECT AVG(Runtime) FROM Movies WHERE Genre = 'Drama';
```
11. What is the output of applying the MAX() function to the "ReleaseYear" column in the "Movies" table?
```sql
SELECT MAX(ReleaseYear) FROM Movies;
```
12. How can you find the movie with the longest runtime using SQL?
```sql
SELECT Title FROM Movies WHERE Runtime = (SELECT MAX(Runtime) FROM Movies);
```
13. What is the purpose of the MIN() aggregate function in SQL?
The MIN() aggregate function is used to find the smallest value in a column.

14. How do you determine the total number of movies released in each year?
```sql
SELECT ReleaseYear, COUNT(*) FROM Movies GROUP BY ReleaseYear;
```
15. Which SQL aggregate function can be used to calculate the median rating of all movies?
SQL does not have a built-in aggregate function to calculate the median.

16. How can you find the sum of box office revenue for all movies released in the year 2020?
```sql
SELECT SUM(BoxOfficeRevenue) FROM Movies WHERE ReleaseYear = 2020;
```
17. What aggregate function can help you find the movie with the highest rating?
```sql
SELECT Title FROM Movies WHERE Rating = (SELECT MAX(Rating) FROM Movies);
```
18. How do you calculate the average box office revenue for movies released in the "Comedy" genre?
```sql
SELECT AVG(BoxOfficeRevenue) FROM Movies WHERE Genre = 'Comedy';
```
19. What is the result of applying the SUM() function to the "BoxOfficeRevenue" column in the "Movies" table?
The SUM() function applied to the "BoxOfficeRevenue" column will return the total sum of box office revenue for all movies in the table.

20. How can you determine the number of movies released in each genre?
```sql
SELECT Genre, COUNT(*) FROM Movies GROUP BY Genre;
```
21. Which aggregate function is used to find the earliest release date among movies in the "Sci-Fi" genre?
```sql
SELECT MIN(ReleaseDate) FROM Movies WHERE Genre = 'Sci-Fi';
```
22. How can you calculate the total runtime of all movies in the "Horror" genre?
```sql
SELECT SUM(Runtime) FROM Movies WHERE Genre = 'Horror';
```
23. What aggregate function helps you find the movie with the lowest box office revenue?
```sql
SELECT Title FROM Movies WHERE BoxOfficeRevenue = (SELECT MIN(BoxOfficeRevenue) FROM Movies);
```
24. How do you calculate the average rating for movies released in the year 2019?
```sql
SELECT AVG(Rating) FROM Movies WHERE ReleaseYear = 2019;
```
25. What is the purpose of the HAVING clause when using aggregate functions?
The HAVING clause is used with GROUP BY to filter the results of an aggregate function based on a condition.

26. How can you find the maximum release year among movies in the "Action" genre?
```sql
SELECT MAX(ReleaseYear) FROM Movies WHERE Genre = 'Action';
```
27. Which SQL aggregate function is used to calculate the mode of a set of values?
SQL does not have a built-in aggregate function to calculate the mode .

28. How can you count the number of movies with a rating above 8.0?
```sql
SELECT COUNT(*) FROM Movies WHERE Rating > 8.0;
```
29. What aggregate function is used to find the movie with the earliest release date?
```sql
SELECT Title FROM Movies WHERE ReleaseDate = (SELECT MIN(ReleaseDate) FROM Movies);
```
30. How do you calculate the total box office revenue for movies with a runtime of 120 minutes or more?
```sql
SELECT SUM(BoxOfficeRevenue) FROM Movies WHERE Runtime >= 120;
```