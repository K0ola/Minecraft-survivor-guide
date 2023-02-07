fetch('data.json').then(function(response) { 
    response.json().then(function(data){
        data.forEach(function (element) {
       console.log(data);
       

       text_beginning  = document.getElementById("text-beginning");
       text_other = document.getElementById("text-survive");
       text_minage = document.getElementById("text-minage");
       text_build = document.getElementById("text-build");
       text_farm = document.getElementById("text-farm");
       text_end = document.getElementById("text-end");

        
                    text_beginning.innerHTML = element.beginning.text_main;
                    text_other.innerHTML = element.other.text_main;
                    text_minage.innerHTML = element.minage.text_main;
                    text_build.innerHTML = element.build.text_main;
                    text_farm.innerHTML = element.farm.text_main;
                    text_end.innerHTML = element.end.text_main;





            let boutton_beginning_suite = document.getElementById("bbeg");
            boutton_beginning_suite.addEventListener('click', ()=>{
                window.open(element.beginning.link, '_blank');  
            })

            let boutton_other_suite = document.getElementById("bother");
            boutton_other_suite.addEventListener('click', ()=>{
                window.open(element.other.link, '_blank');  
            })

            let boutton_minage_suite = document.getElementById("bmin");
            boutton_minage_suite.addEventListener('click', ()=>{
                window.open(element.minage.link, '_blank');  
            })

            let boutton_build_suite = document.getElementById("bbuild");
            boutton_build_suite.addEventListener('click', ()=>{
                window.open(element.build.link, '_blank');  
            })
            let boutton_farm_suite = document.getElementById("bfarm");
            boutton_farm_suite.addEventListener('click', ()=>{
                window.open(element.farm.link, '_blank');  
            })
            let boutton_end_suite = document.getElementById("bend");
            boutton_end_suite.addEventListener('click', ()=>{
                window.open(element.end.link, '_blank');  
            })



            
        });
    }) 
 })