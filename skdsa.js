//限制上传图片大小100K
	 var MAXSIZE = 100*1024; 
	//图片大小限制信息
	 var ERROR_IMGSIZE = "图片大小不能超过100K";
	//图片是否合格 
	 var isImg = true; 
	 function checkFileChange(obj) { 
	    updateTips("");
	    var img = $(".img").get(0); 
	    var file = obj.value;
	    var exp = /.\.jpg|.\.gif|.\.png|.\.bmp/i; 
	    if(exp.test(file)){
	        sizeCheck(img);
	     }else{
	        updateTips("图片格式不正确");
	        isImg = false; 
	    }
	}
	function sizeCheck(img){
	    updateTips("");
	    var file = $("input:file[name='file']")[0];
	    if (file.files[0].size > MAXSIZE) {
	        updateTips(ERROR_IMGSIZE);
	        isImg = false; 
	    }else {
	         isImg = true;
	    } 
	}
	function updateTips(str) {
        $("p#errorTips").text(str); 
    } 