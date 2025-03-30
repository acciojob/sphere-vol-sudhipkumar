function volume_sphere() {
    //Write your code here
	 event.preventDefault(); // Prevent form from submitting
    
    let radiusInput = document.getElementById('radius').value;
    let volumeOutput = document.getElementById('volume');

	 let radius = parseFloat(radiusInput);

	 if (isNaN(radius) || radius < 0) {
        volumeOutput.value = 'NaN';
        return;
    }
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
