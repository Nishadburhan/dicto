@ECHO OFF
SET BROWSER=chrome.exe
SET WAIT_TIME=2
@ping 127.0.0.1 -n %WAIT_TIME% -w 1000 > nul
START %BROWSER% -new-tab "http://desktop-0hb7lkp:8000"
EXIT