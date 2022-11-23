import os
from flask import Flask, request
from werkzeug.utils import secure_filename
import logging

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = './uploads'
logging.basicConfig(format='%(message)s', level=logging.INFO)

@app.route('/upload', methods=['POST'])
def upload_file():
   text = request.form['Text']
   logging.info('Text: %s', text)
   if 'File' not in request.files:
      logging.info('No file part')
      return ''
   else:
      file = request.files['File']
      logging.info(file)
      filename = secure_filename(file.filename)
      file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
      return ''
if __name__ == "__main__": 
   app.run(debug=True)