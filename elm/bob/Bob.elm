module Bob exposing (..)

import Regex exposing (contains, regex)


hasLetters : String -> Bool
hasLetters =
    Regex.contains (Regex.regex "[a-zA-Z]")


hey : String -> String
hey string =
    let
        cleanStr =
            string |> String.trim |> String.toUpper
    in
        if cleanStr == "" then
            "Fine. Be that way!"
        else if cleanStr == String.trim string && hasLetters cleanStr then
            "Whoa, chill out!"
        else if String.endsWith "?" cleanStr then
            "Sure."
        else
            "Whatever."
