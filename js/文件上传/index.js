const input = document.querySelector('input')

input.onchange = function() {
	const files = this.files;
	const reader = new FileReader();
	for(let file of files){
		reader.readAsDataURL(file)
		// reader是异步的,监听onload事件可以拿到结果
		reader.onload = function(e) {
			const res = e.target.result;
			preview.src = res;
			console.log(res)
		}
	}
}