// config a pas toucher
var CANVAS = null
	, CTX = null
	, WIDTH = 800
	, HEIGHT= 600
	, currentTime = 0
	, alpha = 0.1
	, a = true
	;

// configuration du génératuer
var Particles = new Array()
	, xStart	= 200
	, yStart	= 300
	, xForce	= 0
	, yForce	= 0
	, xRandom	= 1
	, yRandom	= 1
	, xEmission	= 0
	, yEmission	= 0
	, maxParticles	= 500
	, globalOpacity = 0.01
	, particlesOpacity = 0.4
	, maxWidth = 2
	, maxHeight= 2
	, red	= 255
	, green = 0
	, blue	= 0
	;

// paramètres des particules
var particlesLifeMax	= 500
	,particlesLifeMin	= 100
	, colorAnimated = false
	;
	
// stock les balise html pour agir dessus
var B_XS = null
	, B_YS = null
	, B_XF = null
	, B_YF = null
	, B_XR = null
	, B_YR = null
	, B_XE = null
	, B_YE = null
	, B_MP = null
	, B_GO = null
	, B_PO = null
	, B_PW = null
	, B_PH = null
	, B_XSC = null
	, B_YSC = null
	, B_XFC = null
	, B_YFC = null
	, B_XRC = null
	, B_YRC = null
	, B_XEC = null
	, B_YEC = null
	, B_MPC = null
	, B_GOC = null
	, B_POC = null
	, B_PWC = null
	, B_PHC = null
	, B_RED		= null
	, B_GREEN	= null
	, B_BLUE	= null
	, B_ANIM	= null
	, B_NANIM	= null
	, B_MNL		= null
	, B_MXL		= null
	;

window.onload = function()
{
	CANVAS = document.getElementById('canvas');
	CTX = CANVAS.getContext('2d');
	
	if (!CTX)
	{
		alert("Erreur durant le chargement");
		return false;
	}
	init();
}

function init()
{
	for (var i = 0; i < maxParticles; i++)
	{
		Particles.push({
			"x"				: xStart
			, "y"			: yStart
			, "timestamp"	: Date.now()
			, "life"		: Math.random() * particlesLifeMax + particlesLifeMin
			, "red"			: red
			, "green"		: green
			, "blue"		: blue
			, "width"		: Math.random() * maxWidth
			, "height"		: Math.random() * maxHeight
			, "randomX"		: Math.random() * xRandom - (Math.random() * xRandom)
			, "randomY"		: Math.random() * yRandom - (Math.random() * yRandom)
		});
	}
	
	B_XS = document.getElementById("XS");
	B_YS = document.getElementById("YS");
	B_XF = document.getElementById("XF");
	B_YF = document.getElementById("YF");
	B_XR = document.getElementById("XR");
	B_YR = document.getElementById("YR");
	B_XE = document.getElementById("XE");
	B_YE = document.getElementById("YE");
	B_MP = document.getElementById("MP");
	B_GO = document.getElementById("GO");
	B_PO = document.getElementById("PO");
	B_PW = document.getElementById("PW");
	B_PH = document.getElementById("PH");
	
	B_XSC = document.getElementById("XSC");
	B_YSC = document.getElementById("YSC");
	B_XFC = document.getElementById("XFC");
	B_YFC = document.getElementById("YFC");
	B_XRC = document.getElementById("XRC");
	B_YRC = document.getElementById("YRC");
	B_XEC = document.getElementById("XEC");
	B_YEC = document.getElementById("YEC");
	B_MPC = document.getElementById("MPC");
	B_GOC = document.getElementById("GOC");
	B_POC = document.getElementById("POC");
	B_PWC = document.getElementById("PWC");
	B_PHC = document.getElementById("PHC");
	
	B_XSC.addEventListener("change", changeXS);
	B_YSC.addEventListener("change", changeYS);
	B_XFC.addEventListener("change", changeXF);
	B_YFC.addEventListener("change", changeYF);
	B_XRC.addEventListener("change", changeXR);
	B_YRC.addEventListener("change", changeYR);
	B_XEC.addEventListener("change", changeXE);
	B_YEC.addEventListener("change", changeYE);
	B_MPC.addEventListener("change", changeMP);
	B_GOC.addEventListener("change", changeGO);
	B_POC.addEventListener("change", changePO);
	B_PWC.addEventListener("change", changePW);
	B_PHC.addEventListener("change", changePH);
	
	B_XS.addEventListener("change", changeXS);
	B_YS.addEventListener("change", changeYS);
	B_XF.addEventListener("change", changeXFS);
	B_YF.addEventListener("change", changeYFS);
	B_XR.addEventListener("change", changeXRS);
	B_YR.addEventListener("change", changeYRS);
	B_XE.addEventListener("change", changeXE);
	B_YE.addEventListener("change", changeYE);
	B_MP.addEventListener("change", changeMP);
	B_GO.addEventListener("change", changeGOS);
	B_PO.addEventListener("change", changePOS);
	B_PW.addEventListener("change", changePW);
	B_PH.addEventListener("change", changePH);
	
	B_RED	= document.getElementById("red");
	B_GREEN	= document.getElementById("green");
	B_BLUE	= document.getElementById("blue");
	
	B_RED.addEventListener("change", changeRED);
	B_GREEN.addEventListener("change", changeGREEN);
	B_BLUE.addEventListener("change", changeBLUE);
	
	B_NANIM = document.getElementById("notAnime");
	B_ANIM	= document.getElementById("anime");
	
	B_ANIM.addEventListener("click", animColor);
	B_NANIM.addEventListener("click", notAnimColor);
	
	B_MXL = document.getElementById("MXL");
	B_MNL = document.getElementById("MNL");
	
	B_MXL.addEventListener("change", changeLIFEMAX);
	B_MNL.addEventListener("change", changeLIFEMIN);
	
	
	loop();
}