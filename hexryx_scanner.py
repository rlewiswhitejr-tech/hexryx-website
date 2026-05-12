import requests
from urllib.parse import urljoin

def check_security_headers(response):
    headers = response.headers
    required_headers = {
        "Content-Security-Policy": "Helps prevent cross-site scripting attacks.",
        "X-Frame-Options": "Helps prevent clickjacking.",
        "X-Content-Type-Options": "Prevents MIME-sniffing attacks.",
        "Strict-Transport-Security": "Forces secure HTTPS connections.",
        "Referrer-Policy": "Controls how much referrer data is shared."
    }

    print("\n[Security Headers]")
    for header, description in required_headers.items():
        if header in headers:
            print(f"[PASS] {header} found")
        else:
            print(f"[WARN] {header} missing - {description}")

def check_https(url):
    print("\n[HTTPS Check]")
    if url.startswith("https://"):
        print("[PASS] Website uses HTTPS")
    else:
        print("[WARN] Website does not use HTTPS")

def check_exposed_files(url):
    print("\n[Exposed File Check]")

    risky_files = [
        ".env",
        "config.php",
        "backup.zip",
        "db.sql",
        "admin/",
        ".git/"
    ]

    for file in risky_files:
        test_url = urljoin(url, file)

        try:
            response = requests.get(test_url, timeout=5)

            if response.status_code == 200:
                print(f"[WARN] Possible exposed file or folder: {test_url}")
            else:
                print(f"[PASS] Not exposed: {file}")

        except requests.RequestException:
            print(f"[INFO] Could not check: {file}")

def scan_website(url):
    print("=" * 50)
    print("Hexryx Basic Vulnerability Scanner")
    print("=" * 50)

    check_https(url)

    try:
        response = requests.get(url, timeout=10)

        print("\n[Connection]")
        print(f"[INFO] Status Code: {response.status_code}")

        check_security_headers(response)
        check_exposed_files(url)

        print("\nScan complete.")

    except requests.RequestException as error:
        print(f"[ERROR] Could not connect to website: {error}")

if __name__ == "__main__":
    target = input("Enter website URL you own or have permission to scan: ")

    if not target.startswith("http"):
        target = "https://" + target

    scan_website(target)
