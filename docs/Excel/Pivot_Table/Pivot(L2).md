## Example:

Dataset of fruit sales:

Imagine you have the following data:

| Date       | Fruit  | Sales |
|------------|--------|-------|
| 2023-10-01 | Apple  | 100   |
| 2023-10-01 | Banana | 150   |
| 2023-10-02 | Apple  | 120   |
| 2023-10-02 | Orange | 180   |
| 2023-10-03 | Banana | 200   |
| 2023-10-03 | Apple  | 90    |

And you'd like to find out the total sales for each type of fruit. You could create a pivot table to summarize this information.

- **Rows**: Fruit (Apple, Banana, Orange)
- **Values**: Sales (Sum)
  
Resulting Pivot Table:

| Fruit  | Total Sales |
|--------|-------------|
| Apple  | 310         |
| Banana | 350         |
| Orange | 180         |


In the resulting pivot table:
- The **Fruit** column shows each distinct fruit in the original data.
- The **Total Sales** column shows the sum of sales for each type of fruit.

So, the pivot table provides a summary and shows that you sold 310 units of Apples, 350 units of Bananas, and 180 units of Oranges during the period covered by the original data.
