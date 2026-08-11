# ==========================================
# ROUTES
# Web-Based Dark Web Threat Monitoring Dashboard
# ==========================================

from flask import jsonify


def register_routes(app, db):

    # ==========================================
    # HOME API
    # ==========================================

    @app.route("/")
    def home():

        return jsonify({
            "message": "Dark Web Threat Monitoring Dashboard Backend Running Successfully"
        })


    # ==========================================
    # DASHBOARD API (MongoDB)
    # ==========================================

    @app.route("/dashboard")
    def dashboard():

        threats_collection = db["threats"]
        alerts_collection = db["alerts"]
        reports_collection = db["reports"]


        return jsonify({

            "totalThreats": threats_collection.count_documents({}),

            "highRiskAlerts": threats_collection.count_documents({
                "risk": "high"
            }),

            "darkWebMentions": alerts_collection.count_documents({}),

            "activeInvestigations": reports_collection.count_documents({})

        })



    # ==========================================
    # THREAT FEED API (MongoDB)
    # ==========================================

    @app.route("/threats")
    def threats():

        threats_collection = db["threats"]


        if threats_collection.count_documents({}) == 0:

            threats_collection.insert_many([

                {
                    "title": "🦠 Ransomware Group Activity",
                    "source": "Dark Forum",
                    "detected": "2 Minutes Ago",
                    "risk": "high"
                },

                {
                    "title": "💳 Credit Card Dump Listed",
                    "source": "Black Market",
                    "detected": "5 Minutes Ago",
                    "risk": "medium"
                },

                {
                    "title": "🎣 Phishing Kit Shared",
                    "source": "Telegram Channel",
                    "detected": "9 Minutes Ago",
                    "risk": "low"
                },

                {
                    "title": "📂 Employee Database Leak",
                    "source": "Hidden Wiki",
                    "detected": "12 Minutes Ago",
                    "risk": "high"
                }

            ])


        return jsonify(
            list(threats_collection.find({}, {"_id":0}))
        )



    # ==========================================
    # ALERTS API (MongoDB)
    # ==========================================

    @app.route("/alerts")
    def alerts():

        alerts_collection = db["alerts"]


        if alerts_collection.count_documents({}) == 0:

            alerts_collection.insert_many([

                {
                    "title": "🚨 Critical Database Leak",
                    "severity": "Critical",
                    "source": "Dark Forum",
                    "time": "5 Minutes Ago"
                },

                {
                    "title": "🦠 Ransomware Activity Detected",
                    "severity": "High",
                    "source": "Hidden Wiki",
                    "time": "12 Minutes Ago"
                },

                {
                    "title": "🎣 New Phishing Campaign",
                    "severity": "Medium",
                    "source": "Telegram",
                    "time": "20 Minutes Ago"
                }

            ])


        return jsonify(
            list(alerts_collection.find({}, {"_id":0}))
        )



    # ==========================================
    # ANALYTICS API (MongoDB)
    # ==========================================

    @app.route("/analytics")
    def analytics():

        threats_collection = db["threats"]


        total_threats = threats_collection.count_documents({})


        high_risk = threats_collection.count_documents({
            "risk":"high"
        })


        medium_risk = threats_collection.count_documents({
            "risk":"medium"
        })


        low_risk = threats_collection.count_documents({
            "risk":"low"
        })


        return jsonify({

            "categories":[
                "High Risk",
                "Medium Risk",
                "Low Risk"
            ],


            "counts":[
                high_risk,
                medium_risk,
                low_risk
            ],


            "months":[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun"
            ],


            "monthlyThreats":[
                total_threats,
                total_threats+2,
                total_threats+1,
                total_threats+4,
                total_threats+3,
                total_threats+5
            ]

        })



    # ==========================================
    # REPORTS API (MongoDB)
    # ==========================================

    @app.route("/reports")
    def reports():

        reports_collection = db["reports"]


        return jsonify(
            list(reports_collection.find({}, {"_id":0}))
        )



    # ==========================================
    # SETTINGS API
    # ==========================================

    @app.route("/settings")
    def settings():

        return jsonify({

            "theme":"Dark Mode Enabled",
            "notifications":"Email Alerts Active",
            "password":"Last Updated 21 Days Ago",
            "account":"Administrator",
            "reports":"Weekly Reports Enabled",
            "backup":"Automatic Cloud Backup",
            "sources":"14 Sources Connected",
            "firewall":"Protection Enabled"

        })