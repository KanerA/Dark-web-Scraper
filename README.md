# Dark Web Scraper

## The project - 
The challenge - created by [IntSights](https://intsights.com/) - was assigned to me as part of the fullstack course of scale-up velocity.  
This scraper's goal is to give the ordinary user, access to dark web data.
It's actively going through the dark-web paste website - [Paste Stronghold](http://nzxj65x32vh2fkhk.onion/all), which can't be accessed with the regular chrome/firefox browser.  
Another use of this project is gathering information,
saving the data for analysis - hopefully a feature that will be added in the near future.

##  Start the scraper -
1. Clone this repository.

2. Then run - 
```bash
docker-compose up
```
 (You need to have Docker installed on your machine).

### After launching the docker-compose network, go to localhost:80 on your browser.

## Run locally - 
1. Clone the repository.

2. Download [tor browser](https://www.torproject.org/download/)

3. Go to the "tor browser" directory /Browser/torBrowser/tor and click on tor.exe
   or through the command line - 
   ```bash
    cd "tor browser" && start /Browser/torBrowser/tor/tor.exe
   ```

4. Open 3 terminals from the root directory of the project.

5. In the first, go to - server/index.js --> uncomment lines 5-6, comment out lines 7-8

6. Next, go to the second terminal window and to scraper/scraper.js --> uncomment line 6, comment lines 7,10.

7. Finally, in the third terminal window - in client/src/setupProxy.js --> uncomment line 8, comment out line 7.

8. Now you can access the website on localhost:3000.