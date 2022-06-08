# RoverSpraket Translator
This is a demo project that translates from plane English to Roverspraket.

# Endpoints
* /translate/normal  (POST)
* /translate/rovarsprak   (POST)
* /jokes (GET)
# Sample Request & Response
* /translate/normal.

  This is a `POST` Method that takes `application/json` and responds to the request with `application/json`.


```
    Request:
        {
            "text": "abcde"
        }
```
```
    Response:
        {
            "roverspraket": "abobcocdode"
        }
```

* /translate/rovarsprak.

  This is a `POST` Method that takes `application/json` and sends response `application/json`.


```
    Request:
        {
            "text": "abobcocdode"
        }
```
```
    Response:
        {
            "translation": "abcde"
        }
```

* /jokes.

  This is a `GET` that sends response `application/json`.

```
    Response:
        {
            "en": "Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.",
            "joke": "JoJavova isos lolikoke Alolzozhoheimomeror'o'sos, itot sostotarortotsos ofoffof soslolowow, bobutot evovenontotualollolyoy, yoyouror momemomororyoy isos gogonone."
        }
```