# ==========================================
# DATABASE CONNECTION
# ==========================================

from pymongo import MongoClient
from config import MONGO_URI, DATABASE_NAME


def connect_database():
    """
    Connect to MongoDB
    """

    client = MongoClient(MONGO_URI)

    database = client[DATABASE_NAME]

    return database