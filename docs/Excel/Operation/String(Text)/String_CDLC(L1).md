# Functions for working with text (strings). 

1. **LEN(text)**: Returns the length (number of characters) of a text string.

2. **LEFT(text, num_chars)**: Returns a specified number of characters from the beginning of a text string.

3. **RIGHT(text, num_chars)**: Returns a specified number of characters from the end of a text string.

4. **MID(text, start_num, num_chars)**: Returns a specified number of characters from a text string, starting at a specified position.

5. **CONCATENATE(text1, text2, ...)**: Combines (concatenates) two or more text strings into one.

6. **CONCAT(text1, text2, ...)**: Similar to CONCATENATE, this function combines text strings into one, but it can handle arrays and ranges of cells.

7. **TEXT(value, format_text)**: Converts a value to text using a specified format.

8. **UPPER(text)**: Converts all letters in a text string to uppercase.

9. **LOWER(text)**: Converts all letters in a text string to lowercase.

10. **PROPER(text)**: Capitalizes the first letter of each word in a text string.

11. **TRIM(text)**: Removes extra spaces from a text string, leaving only single spaces between words.

12. **SUBSTITUTE(text, old_text, new_text, [instance_num])**: Replaces occurrences of old text with new text in a text string. You can specify which occurrence to replace with the optional instance_num.

13. **REPLACE(old_text, start_num, num_chars, new_text)**: Replaces a specified number of characters in a text string with new text, starting at a specified position.

14. **FIND(find_text, within_text, [start_num])**: Returns the starting position of one text string within another text string. You can specify a starting position with the optional start_num.

15. **SEARCH(find_text, within_text, [start_num])**: Similar to FIND, but it is not case-sensitive.

16. **REPT(text, number_times)**: Repeats a text string a specified number of times.

17. **CHAR(number)**: Converts a number to the corresponding character.

18. **CODE(text)**: Returns the numeric Unicode value of the first character in a text string.

19. **CLEAN(text)**: Removes non-printable characters from a text string.

20. **T(value)**: Converts a value to text.

21. **VALUE(text)**: Converts a text representation of a number to an actual number.
