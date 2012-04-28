function changeXS (ev)
{
	if (!Number(ev.target.value)) return;
	xStart = Number(ev.target.value);
	B_XS.value = xStart;
}

function changeYS (ev)
{
	if (!Number(ev.target.value)) return;
	yStart = Number(ev.target.value);
	B_YS.value = yStart;
}

function changeXF (ev)
{
	if (!Number(ev.target.value)) return;
	xForce = (Number(ev.target.value) - 500) / 100;
	B_XF.value = xForce;
}

function changeYF (ev)
{
	if (!Number(ev.target.value)) return;
	yForce = (Number(ev.target.value) - 500) / 100;
	B_YF.value = yForce;
}
function changeXR (ev)
{
	if (!Number(ev.target.value)) return;
	xRandom = Number(ev.target.value) / 100;
	if (xRandom < 0) { xRandom = 0; }
	B_XR.value = xRandom;
}

function changeYR (ev)
{
	if (!Number(ev.target.value)) return;
	yRandom = Number(ev.target.value) / 100;
	if (yRandom < 0) { yRandom = 0; }
	B_YR.value = yRandom;
}

function changeXFS (ev)
{
	if (!Number(ev.target.value)) return;
	xForce = (Number(ev.target.value) - 500) / 100;
	B_XF.value = xForce;
}

function changeYFS (ev)
{
	if (!Number(ev.target.value)) return;
	yForce = (Number(ev.target.value) - 500) / 100;
	B_YF.value = yForce;
}
function changeXRS (ev)
{
	if (!Number(ev.target.value)) return;
	xRandom = Number(ev.target.value) / 100;
	if (xRandom < 0) { xRandom = 0; }
	B_XR.value = xRandom;
}

function changeYRS (ev)
{
	if (!Number(ev.target.value)) return;
	yRandom = Number(ev.target.value) / 100;
	if (yRandom < 0) { yRandom = 0; }
	B_YR.value = yRandom;
}

function changeXE (ev)
{
	if (!Number(ev.target.value)) return;
	xEmission = Number(ev.target.value);
	B_XE.value = xEmission;
}

function changeYE (ev)
{
	if (!Number(ev.target.value)) return;
	yEmission = Number(ev.target.value);
	B_YE.value = yEmission;
}

function changeMP (ev)
{
	if (!Number(ev.target.value)) return;
	maxParticles = Number(ev.target.value);
	B_MP.value = maxParticles;
	
	if (maxParticles <= maxParticles.length) return;
	
	
	for (var i = Particles.length; i < maxParticles; i++)
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
}

function changeGO (ev)
{
	if (!Number(ev.target.value)) return;
	globalOpacity = Number(ev.target.value) / 1000;
	B_GO.value = globalOpacity;
}

function changePO (ev)
{
	if (!Number(ev.target.value)) return;
	particlesOpacity = Number(ev.target.value) / 1000;
	B_PO.value = particlesOpacity;
}

function changeGOS (ev)
{
	if (!Number(ev.target.value)) return;
	globalOpacity = Number(ev.target.value);
	B_GO.value = globalOpacity;
}

function changePOS (ev)
{
	if (!Number(ev.target.value)) return;
	particlesOpacity = Number(ev.target.value);
	B_PO.value = particlesOpacity;
}

function changePW (ev)
{
	if (!Number(ev.target.value)) return;
	maxWidth = Number(ev.target.value);
	B_PW.value = maxWidth;
}

function changePH (ev)
{
	if (!Number(ev.target.value)) return;
	maxHeight = Number(ev.target.value);
	B_PH.value = maxHeight;
}

function changeRED (ev)
{
	if (!Number(ev.target.value)) return;
	red = Number(ev.target.value);
}

function changeGREEN (ev)
{
	if (!Number(ev.target.value)) return;
	green = Number(ev.target.value);
}

function changeBLUE (ev)
{
	if (!Number(ev.target.value)) return;
	blue = Number(ev.target.value);
}

function animColor()
{
	colorAnimated = true;
}

function notAnimColor()
{
	colorAnimated = false;
}

function changeLIFEMAX(ev)
{
	if (!Number(ev.target.value)) return;
	particlesLifeMax = Number(ev.target.value);
	B_MXL.value = particlesLifeMax;
}

function changeLIFEMIN(ev)
{
	if (!Number(ev.target.value)) return;
	particlesLifeMin = Number(ev.target.value);
	B_MNL.value = particlesLifeMin;
}