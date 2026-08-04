from flask import Flask, render_template

# Crear la aplicación Flask
app = Flask(__name__)

# Ruta principal
@app.route("/")
def inicio():
    return render_template("index.html")

# Ejecutar el servidor
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)