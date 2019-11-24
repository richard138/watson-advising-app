import requests
from bs4 import BeautifulSoup

def login(user, password):
    with requests.session() as sesh:
        url = "https://uncw.instructure.com/login/ldap"
        content = sesh.get(url)
        bs = beautifulsoup(content.text, features="html.parser")
        auth_tok = bs.select('input[name="authenticity_token"]')[0][value]
        params = {
            "psuedonym_session[unique_id]": user,
            "psuedonym_session[password]": password,
            "authenticity_token": auth_tok
        }
        response = sesh.post(url, data=params)
        return response.status