const express = require('express')
const app = express();
var fastText = require('fasttext');
const cors = require('cors');

let config = { 
  dim: 100,
  input: "train.txt",
  output: "model"
}

let classifier = new fastText.Classifier();

classifier.train('supervised', config)
    .then((res) => {
        console.log('model info after training:', res)
    });

