```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script> 
        // functions are hoisted
        india() 
        function india(){
            console.log("Hello world")
        }
        
    </script>
</body>
</html>
```


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script> 
        console.log(a)
        var a = 10;

        // It means that you can use this variable before it's declared but
        // Initial value will be undefined.
        
    </script>
</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script> 
        var y;
        console.log(y)
        y=10;

        // Variable assignments are not hoisted
    </script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script> 
        greet()
        var greet=function(){
            console.log("Hello")
        }

        // functions expressions are not hoisted
    </script>
</body>
</html>