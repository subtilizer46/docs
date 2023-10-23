HLOOKUP is a function in spreadsheet software, like Microsoft Excel or Google Sheets, used to search for a specific value in the first row of a table or range and return a corresponding value from a specified row below.


- **Full Form:** Horizontal Lookup

- **Definition:** HLOOKUP searches for a value in the first row of a table and returns a corresponding value from a specified row, moving horizontally across the table.

**Syntax:**

```
=HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])
```

- `lookup_value`: The value you want to find in the first row of the table_array.
- `table_array`: The range of cells that contains the data you want to search in, with the first row containing the lookup values.
- `row_index_num`: The row number from which you want to retrieve the result (the first row in the table_array is 1, the second row is 2, and so on).
- `[range_lookup]`: This parameter is optional. If set to TRUE (or omitted), it assumes an approximate match and looks for the closest match. If set to FALSE, it searches for an exact match.

**Example:**

Suppose you have a table of product information like this:

| Product Code | Product Name | Price |
|--------------|--------------|-------|
| P001         | Laptop       | 800   |
| P002         | Smartphone   | 400   |
| P003         | Tablet       | 300   |

You want to find the price of product P002. You can use HLOOKUP like this:

```
=HLOOKUP("P002", A1:C4, 3, FALSE)
```

In this example:
- `"P002"` is the `lookup_value`.
- `A1:C4` is the `table_array` containing the data with the product codes in the first row.
- `3` is the `row_index_num` to retrieve the price from the third row.
- `FALSE` indicates an exact match.

The formula will return `400` as the result because it found an exact match for "P002" in the first row of the table and retrieved the corresponding price from the third row.