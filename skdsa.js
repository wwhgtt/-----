//�����ϴ�ͼƬ��С100K
	 var MAXSIZE = 100*1024; 
	//ͼƬ��С������Ϣ
	 var ERROR_IMGSIZE = "ͼƬ��С���ܳ���100K";
	//ͼƬ�Ƿ�ϸ� 
	 var isImg = true; 
	 function checkFileChange(obj) { 
	    updateTips("");
	    var img = $(".img").get(0); 
	    var file = obj.value;
	    var exp = /.\.jpg|.\.gif|.\.png|.\.bmp/i; 
	    if(exp.test(file)){
	        sizeCheck(img);
	     }else{
	        updateTips("ͼƬ��ʽ����ȷ");
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