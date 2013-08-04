//vamos acessar a camera via webkit

var cameraWeb = {
    n:navigator,
    onSuccess:function(stream){
    
        source = window.webkitURL.createObjectURL(stream);
        var output = document.getElementById('output'), source;
        output.autoplay = true;
        output.src = source;
    },

    onError:function(error){
        console.log(error)
    },
    initCamera:function(){
        console.log("chamou");
        cameraWeb.n.webkitGetUserMedia({video:true,audio:true,toString:function(){return "video,audio";}}, 
            cameraWeb.onSuccess, cameraWeb.onError);
    }

}
