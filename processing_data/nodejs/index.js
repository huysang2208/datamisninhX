const express = require('express')
const app = express();
var fastText = require('fasttext');
const cors = require('cors');
const path = require('path');

const model = path.resolve(__dirname, './model.bin');
const classifier = new fastText.Classifier(model);

const readLine = require('readline');
const f = require('fs');
var file = './data.txt';
var rl = readLine.createInterface({
    input : f.createReadStream(file),
    output : process.stdout,
    terminal: false
});

const fs = require('fs');

const data = fs.readFileSync('./data.txt',
              {encoding:'utf8', flag:'r'});

console.log(classifier.predict(data, 5)
    .then((res) => {
        if (res.length > 0) {
            let tag = res[0].label; 
            let confidence = res[0].value 
            console.log(tag);
        } else {    
            console.log('No matches');
        }
    }));

rl.on('line', function (text) {
    classifier.predict(text, 5)
    .then((res) => {
        if (res.length > 0) {
            let tag = res[0].label; 
            let confidence = res[0].value 
            console.log(tag);
        } else {    
            console.log('No matches');
        }
    });
});


const lineReader = require('line-reader');
lineReader.eachLine('./data.txt', async(line,last)=>{
    await classifier.predict(line, 5)
    .then((res) => {
        if (res.length > 0) {
            let tag = res[0].label; 
            let confidence = res[0].value 
            console.log(tag);
        } else {
            console.log('No matches');
        }
    });
})

classifier.predict("Good ratio price/service. Good advices for the national park and village . Tốt", 10)
    .then((res) => {
        if (res.length > 0) {
            let tag = res[0].label; 
            let confidence = res[0].value 
            console.log('1')
            console.log('classify', tag, confidence, res);
        } else {
            console.log('No matches');
        }
    });

    classifier.predict("Trang thiết bị vệ sinh hơi cũ. Vệ sinh sạch sẽ, nhân viên thân thiện, địa điểm tốt..  Một khách sạn sạch sẽ, thoải mái, dễ chịu, địa điểm tốt.", 10)
    .then((res) => {
        if (res.length > 0) {
            let tag = res[0].label; 
            let confidence = res[0].value 
            console.log('2')
            console.log('classify', tag, confidence, res);
        } else {
            console.log('No matches');
        }
    });


classifier.predict("Friendly staff. Helpful for booking tours. Room was clean and quiet. . Perfect location for Ke Bang national park caves", 10)
    .then((res) => {
        if (res.length > 0) {
            let tag = res[0].label; 
            let confidence = res[0].value 
            console.log('3')
            console.log('classify', tag, confidence, res);
        } else {
            console.log('No matches');
        }
    });



    classifier.predict("Friendly staff. Helpful for booking tours. Room was clean and quiet. . Perfect location for Ke Bang national park caves", 5)
    .then((res) => {
        if (res.length > 0) {
            let tag = res[0].label; 
            let confidence = res[0].value 
            console.log('classify', tag, confidence, res);
        } else {
            console.log('No matches');
        }
    });