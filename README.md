# weechat-translate

**Use Google Translate directly in Weechat**

* Put the ```tr.py``` script in ```~/.weechat/python/``` and type ```/script load tr.py```
* [language codes](https://sites.google.com/site/tomihasa/google-language-codes)

Examples:

```
/tr ar goedemorgen
 صباح الخير
/tr nl,ar صباح الخير
Goede morgen
/tr en,ar صباح الخير
good morning
```

When you translate back from a language, the translated text will not be shown in the channel, only in the buffer.

The default source language is Dutch, nl.
