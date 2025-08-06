import os
import sys
from pathlib import Path
from bs4 import BeautifulSoup

# Get the list of all HTML files
html_files = []
# aida_tmp is the root of the project
for root, dirs, files in os.walk("Desktop/7/websiteeee2-feature-style-and-nav-improvements/fadha2telmidh"):
    for file in files:
        if file.endswith(".html"):
            html_files.append(Path(root) / file)

# Read the new footer content
with open("new_footer.html", "r", encoding="utf-8") as f:
    new_footer_html = f.read()

# For each HTML file, replace the footer
for html_file in html_files:
    if "ThéorieHolland.html" in str(html_file) or " Estimsoi.html" in str(html_file) or "Les16personnalités.html" in str(html_file):
        print(f"Skipping problematic file: {html_file}")
        continue

    try:
        with open(html_file, "rb") as f:
            file_bytes = f.read()

        soup = BeautifulSoup(file_bytes.decode('utf-8'), "html.parser")

    except FileNotFoundError:
        print(f"Could not find file: {html_file}")
        continue


    # Find the old footer and remove it
    old_footer = soup.find("footer", class_="footer")
    if old_footer:
        old_footer.decompose()

    # Create a new footer soup
    new_footer_soup = BeautifulSoup(new_footer_html, "html.parser")

    # Adjust the links in the new footer
    for a in new_footer_soup.find_all("a"):
        href = a.get("href")
        if href and not href.startswith("#") and not href.startswith("http"):
            # It's a relative link, make it relative to the current file

            # First, get the path of the link relative to the project root
            link_path_from_root = (Path("Desktop/7/websiteeee2-feature-style-and-nav-improvements/fadha2telmidh") / href).resolve()

            # Then, get the path of the current html file's directory
            html_file_dir = html_file.parent.resolve()

            # Finally, calculate the relative path from the html file to the link
            relative_path = os.path.relpath(link_path_from_root, html_file_dir)

            a["href"] = relative_path


    # Append the new footer to the body
    body = soup.find("body")
    if body:
        body.append(new_footer_soup)

    # Write the modified HTML back to the file
    with open(html_file, "w", encoding="utf-8") as f:
        f.write(str(soup))

    # Also, I need to fix the href- typo in index.html
    if html_file.name == "index.html":
        with open(html_file, "r", encoding="utf-8") as f:
            content = f.read()
        content = content.replace('href-="warachetTafa3oulia/sifet-ni9at9ouwa.html"', 'href="warachetTafa3oulia/sifet-ni9at9ouwa.html"')
        with open(html_file, "w", encoding="utf-8") as f:
            f.write(content)
