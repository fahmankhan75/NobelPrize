from flask import Flask, render_template
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)
# ----------------------------------------------------------------------------------
data = json.load(open('noble.json'))
categories = [
    'chemistry', 'medicine', 'economics', 'peace', 'literature', 'physics'
]
prizes = data["prizes"]


# ----------------------------------------------------------------------------------
# this is the home page. Gives all the winners/category an d everything else in the api
@app.route('/')
def home():
    winners = []

    for prize in prizes:
        year = prize['year']
        category = prize['category']
        try:
            laureates = prize['laureates']
        except KeyError:
            continue

        winner = (year, category, laureates)
        winners.append(winner)

    return json.dumps(winners)


# ----------------------------------------------------------------------------------
# get the list of winners for a year that the user is interested in
@app.route('/<string:year>')
def winners_by_year(year):
    winners = {}

    for prize in prizes:
        if prize['year'] == year:
            category = prize['category']
            laureate = prize['laureates']
            winners[category] = laureate

    return render_template("index.html", winners)


# ---------------------------------------------------------------------------------
'''
The following functions gives winner for a certain year and category for that year
Winner can be found using keys under year->category->key . See the output example below
e.g.
[
  [
    "2019",
    "chemistry",
    [
      {
        "id": "976",
        "firstname": "John",
        "surname": "Goodenough",
        "motivation": "\"for the development of lithium-ion batteries\"",
        "share": "3"
      },

'''


@app.route('/winners')
def winners():
    winners = []

    for prize in prizes:
        year = prize['year']
        category = prize['category']
        try:
            laureates = prize['laureates']
        except KeyError:
            continue

        winner = (year, category, laureates)
        winners.append(winner)

    return json.dumps(winners)


# ---------------------------------------------------------------------------------
# Convenient function to display the 'search' react component
@app.route('/search')
def search():
    return render_template('search.html')


# ---------------------------------------------------------------------------------
# Convenient function to display the 'about' react component
@app.route('/about')
def about():
    return render_template('about.html')
