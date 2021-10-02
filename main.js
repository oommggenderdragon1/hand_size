var css = 'body {animation-name:test; animation-duration:4s; animation-iteration-count:infinite; } @keyframes test{ 0%{color:#ff0000} 20%{color:#00ff00} 40%{color:#ffff00} 60%{color:#0000ff} 80%{color:#00ffff} 100%{color:#ff0000}', head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style'); style.type = 'text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style);
Webcam.set({
width:350,
height:300,
image_format:"png",
png_quality:100,

});
camera =  document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
Webcam.snap(
function(data_uri){
    document.getElementById("Result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
});

}
console.log("ml5 version",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/DXzgsHYc2/model.json',modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}
function Speak(){
var synth = window.speechSynthesis;
speak_data_1 = "THE FIRST PREDICTION IS "+prediction_1;
speak_data_2 = "THE SECOND PREDICTION IS "+prediction_2;
var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
synth.speak(utterThis);

}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img,gotResult);
    }
    
    
    function gotResult(error,results){
    if(error){
    console.error(error);
    }
    else{
    console.log(results);
    document.getElementById("Result_emotion-name").innerHTML = results[0].label;
    document.getElementById("Result_emotion-name-2").innerHTML = results[1].label;
    prediction_1 = results[0].label;
    prediction_2 = results[1].label;
    Speak();
    if(results[0].label == 'yoy'){
    document.getElementById("UpdateEmoji").innerHTML ="&#9996;"
    
    }
    if(results[0].label == 'thums_up'){
        document.getElementById("UpdateEmoji").innerHTML ="&#128077;"
        
        }
        if(results[0].label == 'nice'){
            document.getElementById("UpdateEmoji").innerHTML ="&#128076;"
            
            }
            if(results[0].label == 'victory'){
                document.getElementById("UpdateEmoji").innerHTML ="&#9996;"
            }
            if(results[1].label == 'yoy'){
                document.getElementById("UpdateEmoji-2").innerHTML ="&#9996;"
                
                }
                if(results[1].label == 'thums_up'){
                    document.getElementById("UpdateEmoji-2").innerHTML ="&#128077;"
                    
                    }
                    if(results[1].label == 'nice'){
                        document.getElementById("UpdateEmoji-2").innerHTML ="&#128076;"
                        
                        }
                        if(results[1].label == 'victory'){
                            document.getElementById("UpdateEmoji-2").innerHTML ="&#9996;"
                            
                            }
    }
    
    }
    





