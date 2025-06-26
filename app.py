import mysql.connector
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Connect to your MySQL database in XAMPP
db = mysql.connector.connect(
    host="localhost",
    user="root",         # default for XAMPP
    password="",         # leave empty unless you set one
    database="career_catalyst"
)

cursor = db.cursor()

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    query = "SELECT * FROM users WHERE email = %s AND password = %s"
    cursor.execute(query, (email, password))
    result = cursor.fetchone()

    if result:
        return "Login successful!", 200
    else:
        return "Invalid email or password", 401

if __name__ == '__main__':
    app.run(debug=True)
