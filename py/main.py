from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
   return "Hello World"

@app.route('/getTimeStories')
def get_time_stories_controller():
   import time_story_scraper
   return str(time_story_scraper.get_time_stories())

if __name__ == '__main__':
   
   app.run()

