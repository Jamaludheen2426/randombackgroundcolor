    const arr = [ 0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    function generate()

        {
            let body = document.getElementsByTagName("body")[0];
            let random = "#";
            let pr = document.getElementsByClassName("show")[0];
            for (let i =0 ; i<6; i++)
            {
                random += arr[Math.floor(Math.random() * arr.length)];       
            }
            body.style.backgroundColor=random;
            pr.innerHTML = random;
        }
        generate();