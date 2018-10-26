@echo off
color a
cd "C:\dicto"
echo Fetching the updates...
call git fetch
echo Downloading the updates..
call git pull
echo Update completed...
echo Don't forget to restart your application...
echo Please press any key to escape
pause >null