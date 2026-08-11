# ==========================================
# MAIN FLASK APPLICATION
# ==========================================

from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient
from routes import register_routes

from config import HOST, PORT, DEBUG

# ==========================================
# Create Flask App
# ==========================================

app = Flask(__name__)
client = MongoClient("mongodb://localhost:27017/")

db = client["DarkWebDashboard"]

threats_collection = db["threats"]
# Enable CORS

CORS(app)

# Register all routes

register_routes(app,db)

# ==========================================
# Run Server
# ==========================================

if __name__ == "__main__":

    app.run(

        host=HOST,

        port=PORT,

        debug=DEBUG

    )