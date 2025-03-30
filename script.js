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

	 let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
	volumeOutput.value = volume.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
