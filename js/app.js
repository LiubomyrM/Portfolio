function slideThemIn ()
{
    //document.getElementById("slidein").style.marginLeft="0px";
    //document.getElementById("slidein2").style.marginLeft="0px";
    document.getElementById("show").style.display="none";
    document.getElementById("hide").style.display="inline";
    document.getElementById("slidein").style.display="block";
    document.getElementById("slidein2").style.display="block";
}

function slideThemOut ()
{
    //document.getElementById("slidein").style.marginLeft="-340px";
    //document.getElementById("slidein2").style.marginLeft="700px";
    document.getElementById("show").style.display="inline";
    document.getElementById("hide").style.display="none";
    document.getElementById("slidein").style.display="none";
    document.getElementById("slidein2").style.display="none";
}