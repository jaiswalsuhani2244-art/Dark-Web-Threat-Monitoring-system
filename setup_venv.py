"""
Create and prepare a local virtual environment.
Run:  python setup_venv.py
"""
import os
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
VENV = ROOT / "venv"
REQ = ROOT / "requirements.txt"


def run(cmd, **kwargs):
    print("+", " ".join(str(c) for c in cmd))
    subprocess.check_call(cmd, **kwargs)


def main():
    if VENV.exists():
        print(f"venv already exists at: {VENV}")
    else:
        print("Creating virtual environment...")
        run([sys.executable, "-m", "venv", str(VENV)])

    if os.name == "nt":
        pip = VENV / "Scripts" / "pip.exe"
        python = VENV / "Scripts" / "python.exe"
        activate_hint = r"venv\Scripts\activate"
    else:
        pip = VENV / "bin" / "pip"
        python = VENV / "bin" / "python"
        activate_hint = "source venv/bin/activate"

    print("Upgrading pip...")
    run([str(python), "-m", "pip", "install", "--upgrade", "pip"])

    print("Installing requirements...")
    run([str(pip), "install", "-r", str(REQ)])

    print()
    print("Done.")
    print(f"Activate with:  {activate_hint}")
    print("Then run:        cd backend && python app.py")


if __name__ == "__main__":
    main()
