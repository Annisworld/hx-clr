function colorChange(){
    let hex_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let hex_color = "";
    for(let i=0; i < 6; i++){
        let hex_index = Math.floor(Math.random() * hex_numbers.length);
        hex_color += hex_numbers[hex_index];
    }
    document.getElementById("hex-code").innerHTML = hex_color;
    document.getElementsByTagName("body")[0].style.background = "#" + hex_color;
}