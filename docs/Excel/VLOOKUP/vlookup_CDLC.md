# VLOOKUP(L1)

* VLOOKUP is a function in spreadsheet software, like Microsoft Excel or Google Sheets, used to search for a specific value in a table or range and return a corresponding value from another column. 

* The full form of VLOOKUP is "Vertical Lookup." It's called "vertical" because it searches for a value vertically in a specific column within a table or range of data and retrieves a corresponding value from a different column within the same row. VLOOKUP is a commonly used function in spreadsheet software like Microsoft Excel and Google Sheets for tasks involving data lookup and retrieval.

Here's a simple syntax for VLOOKUP:

```
=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])
```

- `lookup_value`: The value you want to find in the first column of the table_array.
- `table_array`: The range of cells that contains the data you want to search in.
- `col_index_num`: The column number from which you want to retrieve the result (the first column in the table_array is 1, the second column is 2, and so on).
- `[range_lookup]`: This parameter is optional. If set to TRUE (or omitted), it assumes an approximate match and looks for the closest match. If set to FALSE, it searches for an exact match.

Example:

Suppose you have a table of employee information like this:

| Employee ID | Employee Name | Department |
|-------------|---------------|------------|
| 101         | John          | HR         |
| 102         | Mary          | Finance    |
| 103         | Bob           | IT         |
| 104         | Alice         | Marketing  |

You want to find the department of employee ID 102. You can use VLOOKUP like this:

```
=VLOOKUP(102, A2:C5, 3, FALSE)
```

In this example:
- `102` is the `lookup_value`.
- `A2:C5` is the `table_array` containing the data.
- `3` is the `col_index_num` to retrieve the department.
- `FALSE` indicates an exact match.

The formula will return "Finance" as the result because it found an exact match for employee ID 102 in the first column of the table and retrieved the corresponding department from the third column.