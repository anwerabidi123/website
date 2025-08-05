import os

def unpin_header(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".html"):
                filepath = os.path.join(root, file)
                with open(filepath, 'r') as f:
                    content = f.read()

                new_content = content.replace(
                    """/* Header */
.header {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: var(--white);
  padding: 1rem 0;
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 1000;
}""",
                    """/* Header */
.header {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: var(--white);
  padding: 1rem 0;
  box-shadow: var(--shadow);
  z-index: 1000;
}"""
                )

                with open(filepath, 'w') as f:
                    f.write(new_content)

unpin_header('Desktop/website/fadha2telmidh')
