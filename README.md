# anywidget-instructions

```
npm create anywidget@latest
```

```
npm install
```

python3.11 -m venv .venv && source .venv/bin/activate
pip install -e ".[dev]" 
```
```
npm i @tldraw/tldraw
```

```
npm run dev
```



```
# second terminal
jupyterlab
```

```
npm run build
python -m build .
```


```
# publish
twine upload -r testpypi dist/*
twine upload dist/*
```

Your project should now look like this:
```
📁 Project Root (name of your project)
┣━━ 📂 .venv
┃   ┗━━ ... (content of .venv folder)
┣━━ 📂 node_modules
┃   ┗━━ ... (content of node_modules folder)
┣━━ 📂 js
┃   ┗━━ 📄 widget.jsx
┣━━ 📂 src
┃   ┗━━ 📂 qr_code_widget
┃       ┣━━ 📄 __init__.py
┃       ┗━━ 📂 static
┃           ┗━━ 📄 widget.js
┣━━ 📄 README.md
┣━━ 📄 pyproject.toml
┣━━ 📄 package.json
┣━━ 📄 package-lock.json
┣━━ 📄 .gitignore
┗━━ 📄 hello.ipynb
```

1. Rename text  in VS Code Search : qr_code_widget -> tldraw1
2. Rename folder qr_code_widget -> tldraw1
3. Rename qr-code-widget -> tldraw1
4. npm uninstall react-qr-code
5. change to the new component
6. npm i @tldraw/tldraw
7. npm run dev
8. Exit dev with Ctrl+c
9. Change __init__.py: Rename QRCodeWidget -> Tldraw1
10. Change the example: Rename QRCodeWidget -> Tldraw1
11. python3.11 -m venv .venv && source .venv/bin/activate
12. pip install -e ".[dev]" 
13. set version = "0.0.0" -> version = "0.1.0"

For publishing:
13. python -m build .
14. hatch publish



twine upload -r testpypi dist/*
twine upload dist/*
