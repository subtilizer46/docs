from flask import Flask, render_template, request
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient('mongodb://localhost:27017')
db = client['infy']
collection = db['client']

@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/add', methods=['GET', 'POST'])
def add():
    if request.method == 'POST':
        namec = request.form['namec']
        mobile = request.form['mobile']
        id = request.form['id']
        address=request.form['address']

        insert_record(namec, mobile, id, address)
    return render_template('add.html')

@app.route('/display', methods=['GET'])
def display():
    data = list(collection.find())
    return render_template('display.html', data=data)

def insert_record(namec, mobile, id, address):
    employee = {
        '_id': id,
        'name': namec,
        'mobile': mobile,
        'address':address
    }
    collection.insert_one(employee)

if __name__ == '__main__':
    app.run(debug=True)
