# Dark Web Threat Monitoring Dashboard

A web-based cybersecurity dashboard for visualizing, analyzing, and managing dark web threat intelligence.

## Project Structure

```
DarkWeb-Threat-Dashboard/
├── backend/                 # Flask API
│   ├── app.py               # Main application entry
│   ├── config.py            # Configuration (host, port, MongoDB)
│   ├── database.py          # MongoDB connection helper
│   └── routes.py            # API routes
├── frontend/                # Static HTML/CSS/JS UI
│   ├── index.html           # Dashboard
│   ├── threat-feed.html
│   ├── alerts.html
│   ├── analytics.html
│   ├── reports.html
│   ├── settings.html
│   ├── welcome.html
│   ├── script.js
│   └── style.css
├── requirements.txt         # Python dependencies
├── setup_venv.py            # Creates venv + installs packages
├── .gitignore
└── README.md
```

## Prerequisites

- Python 3.10+
- MongoDB running on `mongodb://localhost:27017/`

## Setup (virtual environment)

```bash
# Clone / extract the project
cd DarkWeb-Threat-Dashboard

# Create venv and install dependencies (recommended)
python setup_venv.py
```

Or manually:

```bash
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
```

## Run

```bash
# Activate venv first, then:
cd backend
python app.py
```

API: `http://127.0.0.1:5000`

Open frontend pages in a browser (or serve the `frontend/` folder):

- `frontend/welcome.html` — landing page  
- `frontend/index.html` — main dashboard  

## Notes

- Database name: `darkweb_dashboard` (see `backend/config.py`)
- CORS is enabled for local frontend development
- `venv/` is ignored by `.gitignore` — never commit it

## License

Add your preferred license.
