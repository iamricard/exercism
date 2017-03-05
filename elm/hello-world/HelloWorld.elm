module HelloWorld exposing (..)


helloWorld : Maybe String -> String
helloWorld name =
    case name of
        Just string ->
            "Hello, " ++ string ++ "!"

        Nothing ->
            "Hello, World!"
