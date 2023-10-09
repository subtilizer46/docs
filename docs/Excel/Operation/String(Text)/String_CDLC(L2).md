# Examples of String_CDLC(L1)
1. **LEN(text)**: 
   Example: `=LEN("Excel")` returns `5`, as there are 5 characters in the word "Excel."

2. **LEFT(text, num_chars)**: 
   Example: `=LEFT("Hello, World!", 5)` returns "Hello," by taking the first 5 characters from the left.

3. **RIGHT(text, num_chars)**: 
   Example: `=RIGHT("Hello, World!", 6)` returns "World!" by taking the last 6 characters from the right.

4. **MID(text, start_num, num_chars)**: 
   Example: `=MID("Excel Functions", 7, 9)` returns "Functions" by starting at the 7th character and extracting 9 characters.

5. **CONCATENATE(text1, text2, ...)**: 
   Example: `=CONCATENATE("Hello", ", ", "World")` returns "Hello, World" by combining three text strings.

6. **CONCAT(text1, text2, ...)**: 
   Example: `=CONCAT("A1:A3")` returns the concatenation of values in the range A1 to A3.

7. **TEXT(value, format_text)**: 
   Example: `=TEXT(NOW(), "dd-mmm-yyyy")` returns the current date in the format "07-Oct-2023."

8. **UPPER(text)**: 
   Example: `=UPPER("excel")` returns "EXCEL" by converting the text to uppercase.

9. **LOWER(text)**: 
   Example: `=LOWER("EXCEL")` returns "excel" by converting the text to lowercase.

10. **PROPER(text)**: 
    Example: `=PROPER("exCEL FuNCTioNs")` returns "Excel Functions" by capitalizing the first letter of each word.

11. **TRIM(text)**: 
    Example: `=TRIM("  Excel  ")` returns "Excel" by removing extra spaces.

12. **SUBSTITUTE(text, old_text, new_text, [instance_num])**: 
    Example: `=SUBSTITUTE("Excel is great. Excel is powerful.", "Excel", "Spreadsheets", 2)` returns "Excel is great. Spreadsheets is powerful" by replacing the second occurrence of "Excel" with "Spreadsheets."

13. **REPLACE(old_text, start_num, num_chars, new_text)**: 
    Example: `=REPLACE("Hello, World!", 7, 5, "Universe")` returns "Hello, Universe!" by replacing "World" with "Universe" starting at the 7th character.

14. **FIND(find_text, within_text, [start_num])**: 
    Example: `=FIND("world", "Hello, world!")` returns `7` as it finds "world" starting at the 7th position in the text.

15. **SEARCH(find_text, within_text, [start_num])**: 
    Example: `=SEARCH("WORLD", "Hello, World!")` returns `7` as it's not case-sensitive.

16. **REPT(text, number_times)**: 
    Example: `=REPT("Excel ", 3)` returns "Excel Excel Excel " by repeating "Excel" 3 times.

17. **CHAR(number)**: 
    Example: `=CHAR(65)` returns "A" as 65 corresponds to the character "A" in the ASCII table.

18. **CODE(text)**: 
    Example: `=CODE("A")` returns `65`, which is the Unicode value for "A."

19. **CLEAN(text)**: 
    Example: `=CLEAN("Text with non-printable characters" & CHAR(7))` returns "Text with non-printable characters" by removing the non-printable character (bell, ASCII 7).

20. **T(value)**: 
    Example: `=T(123)` converts the number 123 to text, resulting in the text "123."

21. **VALUE(text)**: 
    Example: `=VALUE("123.45")` converts the text "123.45" to a numerical value, resulting in 123.45.